import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFocusItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_focus_items';
  info: {
    displayName: 'Focus item';
    icon: 'crosshair';
  };
  attributes: {
    key: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 40;
      }>;
    value: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'List item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface SharedSkill extends Struct.ComponentSchema {
  collectionName: 'components_shared_skills';
  info: {
    displayName: 'Skill';
    icon: 'code';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.focus-item': SharedFocusItem;
      'shared.list-item': SharedListItem;
      'shared.skill': SharedSkill;
    }
  }
}
