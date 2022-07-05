import { registerBlockType } from '@wordpress/blocks';

import blockSection from './blocks/section';

import './hooks/core/button';

registerBlockType('spawn-blocks/section', blockSection);
