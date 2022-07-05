import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import cx from 'classnames';

export default (props) => {
  const { attributes } = props;
  const { backgroundClass, isFullBackground, hasIcon } = attributes;

  const blockProps = useBlockProps.save({
    className: cx({ 'has-icon': hasIcon }),
  });

  return (
    <div {...blockProps}>
      <span className={cx('wp-block-spawn-blocks-block-encart--wrapper', backgroundClass, { 'is-full-background': isFullBackground })}></span>
      <InnerBlocks.Content />
    </div>
  );
};
