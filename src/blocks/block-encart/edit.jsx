import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
  PanelColorSettings,
  getColorClassName,
  getColorObjectByColorValue,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { select } from '@wordpress/data';
import cx from 'classnames';

export default (props) => {
  const { attributes, setAttributes } = props;
  const { backgroundColor, backgroundClass, isFullBackground, hasIcon } = attributes;

  const blockProps = useBlockProps({
    className: cx({ 'has-icon': hasIcon }),
  });

  const settings = select('core/editor').getEditorSettings();

  const onColorChange = (value) => {
    const colorObject = getColorObjectByColorValue(settings.colors, value);
    const slugBackgroundColor = colorObject ? getColorClassName('background-color', colorObject.slug) : null;

    setAttributes({
      backgroundColor: value,
      backgroundClass: slugBackgroundColor,
    });
  };

  return (
    <>
      <InspectorControls>
        <PanelColorSettings
          title='Couleurs'
          colorSettings={[
            {
              value: backgroundColor,
              onChange: onColorChange,
              label: 'Bordure',
            },
          ]}
        />

        <PanelBody title='Options' initialOpen={true}>
          <ToggleControl label='Fond plein ?' onChange={(value) => setAttributes({ isFullBackground: value })} checked={isFullBackground} />
          <ToggleControl label='Icone ?' onChange={(value) => setAttributes({ hasIcon: value })} checked={hasIcon} />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <span
          className={cx('wp-block-spawn-blocks-block-encart--wrapper', backgroundClass, {
            'is-full-background': isFullBackground,
          })}
        ></span>
        <InnerBlocks />
      </div>
    </>
  );
};
