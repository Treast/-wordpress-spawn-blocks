import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls, PanelColorSettings, getColorObjectByColorValue } from '@wordpress/block-editor';
import { ColorPalette, PanelBody } from '@wordpress/components';
import { select } from '@wordpress/data';

const allowedBlocks = ['core/button'];

const addAttributes = (settings, name) => {
  if (!allowedBlocks.includes(name)) return settings;

  settings.attributes = Object.assign(settings.attributes, {
    hoverColor: {
      type: 'string',
      default: null,
    },
    hoverColorName: {
      type: 'string',
      default: null,
    },
  });

  return settings;
};

const addAdvancedControls = createHigherOrderComponent((Block) => {
  return (props) => {
    const { name, attributes, setAttributes, isSelected } = props;
    const { hoverColor } = attributes;

    if (!allowedBlocks.includes(name)) return <Block {...props} />;

    const onChangeColor = (color) => {
      let colorName = '';
      if (color) {
        const settings = select('core/editor').getEditorSettings();
        const colorObject = getColorObjectByColorValue(settings.colors, color);
        if (colorObject) {
          colorName = colorObject.slug;
        }
      }
      setAttributes({ hoverColor: color });
      setAttributes({ hoverColorName: colorName });
    };

    return (
      <>
        <Block {...props} />
        {isSelected && (
          <InspectorControls>
            <PanelColorSettings
              title='Couleurs'
              colorSettings={[
                {
                  value: hoverColor,
                  onChange: (colorValue) => onChangeColor(colorValue),
                  label: 'Hover',
                },
              ]}
            />
          </InspectorControls>
        )}
      </>
    );
  };
}, 'addAdvancedControls');

const addCustomClassToBlock = createHigherOrderComponent((Block) => {
  return (props) => {
    const { name } = props;
    const { hoverColor, hoverColorName } = props.attributes;

    if (!allowedBlocks.includes(name) || !hoverColorName) {
      return <Block {...props} />;
    }

    const className = `has-hover-color-${hoverColorName}`;

    return <Block {...props} className={className} />;
  };
}, 'addAdvancedControls');

const applyExtraClass = (extraProps, blockType, attributes) => {
  const { hoverColorName } = attributes;

  if (!allowedBlocks.includes(blockType.name) || !hoverColorName) {
    return extraProps;
  }

  extraProps.className += ` has-hover-color-${hoverColorName}`;

  return extraProps;
};

addFilter('blocks.registerBlockType', 'spawn-blocks/button-custom-attributes', addAttributes);
addFilter('editor.BlockEdit', 'spawn-blocks/button-custom-advanced-control', addAdvancedControls);
addFilter('editor.BlockListBlock', 'spawn-blocks/button-custom-block-class', addCustomClassToBlock);
addFilter('blocks.getSaveContent.extraProps', 'spawn-blocks/button-applyExtraClass', applyExtraClass);
