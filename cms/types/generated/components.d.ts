import type { Schema, Struct } from '@strapi/strapi';

export interface ResumeActivity extends Struct.ComponentSchema {
  collectionName: 'components_resume_activities';
  info: {
    displayName: 'Activity';
    icon: 'star';
  };
  attributes: {
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 600;
      }>;
  };
}

export interface ResumeEducation extends Struct.ComponentSchema {
  collectionName: 'components_resume_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
  };
  attributes: {
    degree: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    period: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 40;
      }>;
  };
}

export interface ResumeExperience extends Struct.ComponentSchema {
  collectionName: 'components_resume_experiences';
  info: {
    displayName: 'Experience';
    icon: 'briefcase';
  };
  attributes: {
    company: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 2000;
      }>;
    period: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    role: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
  };
}

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
      'resume.activity': ResumeActivity;
      'resume.education': ResumeEducation;
      'resume.experience': ResumeExperience;
      'shared.focus-item': SharedFocusItem;
      'shared.list-item': SharedListItem;
      'shared.skill': SharedSkill;
    }
  }
}
