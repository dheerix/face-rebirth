import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'welcome',
    {type: 'category', label: 'Brand', items: ['brand/Brand_Positioning']},
    {type: 'category', label: 'Customer Psychology', items: ['audience/Ideal_Customer_Profiles', 'audience/Audience_Strategy', 'audience/FACE_REBIRTH_Audience_Strategy']},
    {type: 'category', label: 'Marketing', items: ['marketing/overview']},
    {type: 'category', label: 'Content', items: ['marketing/Content_Engine']},
    {type: 'category', label: 'Sales', items: ['sales/overview']},
    {type: 'category', label: '21-Day Program', items: ['program/06_21_Day_Program_Structure']},
    {type: 'category', label: 'Operations', items: ['operations/SOPs_and_Daily_Operations']},
    {type: 'category', label: 'Referral System', items: ['sales/Referral_System']},
    {type: 'category', label: 'Launch Playbook', items: ['marketing/Launch_Playbook']},
    {type: 'category', label: 'Downloads', items: ['downloads/index']},
  ],
};

export default sidebars;
