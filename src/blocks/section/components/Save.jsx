import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default () => {
  const blockProps = useBlockProps.save();

  return (
    <section {...blockProps}>
      <InnerBlocks.Content />
    </section>
  );
};
