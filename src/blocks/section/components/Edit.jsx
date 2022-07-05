import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default () => {
  const blockProps = useBlockProps();

  return (
    <section {...blockProps}>
      <InnerBlocks />
    </section>
  );
};
