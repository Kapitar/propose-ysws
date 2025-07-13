import Airtable from 'airtable'
import { YSWSProposal } from './types';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID || '');

export async function createProposal(proposal: YSWSProposal) {
  try {
    const createdProposal = await base('Proposals').create({
      'YSWS Program Name': proposal.name,
      'YS Part': proposal.YS,
      'WS Part': proposal.WS,
      'Description': proposal.description,
      'Demo URL': proposal.demoURL || '',
      'Website URL': proposal.websiteURL || ''
    });

    return createdProposal;
  } catch (error) {
    console.error('Error creating proposal:', error);
    throw new Error('Failed to create proposal');
  }
}