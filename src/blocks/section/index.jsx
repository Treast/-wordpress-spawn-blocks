import Edit from './components/Edit';
import Save from './components/Save';

const blockSettings = {
  apiVersion: 2,
  title: 'Section',
  description: 'Section de contenu',
  category: 'layout',
  icon: 'media-default',
  edit: Edit,
  save: Save,
  attributes: {
    alignment: {
      type: 'string',
      default: 'none',
    },
    backgroundColor: {
      type: 'string',
      default: null,
    },
  },
  supports: {
    align: ['full', 'wide'],
    color: {
      background: true,
      text: true,
    },
    spacing: {
      margin: true,
      padding: true,
    },
  },
};

export default blockSettings;
