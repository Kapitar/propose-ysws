import Airtable from 'airtable'
import { User, YSWSProposal } from './types';

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

export async function createUser(user: User) {
  try {
    const createdUser = await base('Users').create({
      'Name': user.name,
      'Slack ID': user.slackId,
      'Email': user.email,
      'Photo': user.photo
    });

    return createdUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
}

export async function getUser(slackID: string) {
  try {
    const user = await base('Users').select({
      filterByFormula: `{Slack ID} = '${slackID}'`,
      maxRecords: 1
    }).firstPage();

    return user[0];
  } catch (error) {
    console.error('Error obtaining a user', error);
    throw new Error('Failed to get a user');
  }
}