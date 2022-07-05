<?php

namespace Spawn;

class Block
{
    private string $blockName;
    private string $style;
    private string $editor_script;
    private $renderCallback;
    private $attributes;

    public function __construct(string $blockName)
    {
        $this->blockName = $blockName;

        $formatted_name = str_replace('/', '-', $blockName);

        $this->style = $formatted_name;
        $this->editor_script = $formatted_name;
        $this->renderCallback = null;
        $this->attributes = [];
    }

    public function register()
    {
        $options = [
            'style' => 'spawn-blocks-styles',
            'editor_script' => 'spawn-blocks-editor',
            'editor_style' => 'spawn-blocks-editor',
        ];

        if ($this->renderCallback) {
            $options['render_callback'] = $this->renderCallback;
            $options['attributes'] = $this->attributes;
        }

        register_block_type($this->blockName, $options);
    }

    public function renderCallback($renderCallback)
    {
        $this->renderCallback = $renderCallback;
        return $this;
    }

    public function setAttributes($attributes)
    {
        $this->attributes = $attributes;
        return $this;
    }
}
