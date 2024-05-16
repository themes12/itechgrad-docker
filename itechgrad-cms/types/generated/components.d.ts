import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentHeaderTextContent extends Schema.Component {
  collectionName: 'components_content_header_text_contents';
  info: {
    displayName: 'Header Text Content';
    icon: 'bold';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    text: Attribute.String & Attribute.Required;
  };
}

export interface ContentPlainTextContent extends Schema.Component {
  collectionName: 'components_content_plain_text_contents';
  info: {
    displayName: 'Plain Text Content';
    icon: 'bold';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ContentTableContent extends Schema.Component {
  collectionName: 'components_content_table_contents';
  info: {
    displayName: 'Table Content';
    icon: 'layout';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    header: Attribute.Component<'table.row'>;
    rows: Attribute.Component<'table.row', true>;
  };
}

export interface CreditCredit extends Schema.Component {
  collectionName: 'components_credit_credits';
  info: {
    displayName: 'Credit';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    total: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    lecture: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    lab: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    independent_study: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
  };
}

export interface StaffEmail extends Schema.Component {
  collectionName: 'components_staff_emails';
  info: {
    displayName: 'email';
    description: '';
  };
  attributes: {
    email: Attribute.String & Attribute.Required;
  };
}

export interface StaffPosition extends Schema.Component {
  collectionName: 'components_staff_positions';
  info: {
    displayName: 'position';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface StaffResearchInterest extends Schema.Component {
  collectionName: 'components_staff_research_interests';
  info: {
    displayName: 'research_interest';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface StaffTelephone extends Schema.Component {
  collectionName: 'components_staff_telephones';
  info: {
    displayName: 'telephone';
    description: '';
  };
  attributes: {
    number: Attribute.String & Attribute.Required;
    extension: Attribute.String;
  };
}

export interface TableColumn extends Schema.Component {
  collectionName: 'components_table_columns';
  info: {
    displayName: 'Column';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface TableRow extends Schema.Component {
  collectionName: 'components_table_rows';
  info: {
    displayName: 'Row';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    columns: Attribute.Component<'table.column', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.header-text-content': ContentHeaderTextContent;
      'content.plain-text-content': ContentPlainTextContent;
      'content.table-content': ContentTableContent;
      'credit.credit': CreditCredit;
      'staff.email': StaffEmail;
      'staff.position': StaffPosition;
      'staff.research-interest': StaffResearchInterest;
      'staff.telephone': StaffTelephone;
      'table.column': TableColumn;
      'table.row': TableRow;
    }
  }
}
