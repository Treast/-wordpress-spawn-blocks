import Edit from './edit';
import Save from './save';

const blockSettings = {
  apiVersion: 2,
  title: 'Encart',
  description: 'Encart de texte avec une bordure',
  category: 'layout',
  icon: 'grid-view',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#006464',
    },
    backgroundClass: {
      type: 'string',
      default: 'has-blue-700-background-color',
    },
    isFullBackground: {
      type: 'boolean',
    },
    hasIcon: {
      type: 'boolean',
    },
  },
  styles: [
    {
      name: 'default',
      label: 'Normal',
      isDefault: true,
    },
    {
      name: 'large',
      label: 'Large',
    },
    {
      name: 'tall',
      label: 'Haut',
    },
  ],
  edit: Edit,
  save: Save,
};

export default blockSettings;
