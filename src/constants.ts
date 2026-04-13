import { User, Savings, Loan, Transaction, SHU } from './types';

export const DUMMY_USER: User | null = null;

export const DUMMY_ADMIN: User | null = null;

export const DUMMY_SECRETARY: User | null = null;

export const DUMMY_TREASURER: User | null = null;

export const DUMMY_CHAIRMAN: User | null = null;

export const DUMMY_SAVINGS: Savings = {
  pokok: 0,
  wajib: 0,
  sukarela: 0,
  total: 0
};

export const DUMMY_LOANS: Loan[] = [];

export const DUMMY_TRANSACTIONS: Transaction[] = [];

export const DUMMY_SHU: SHU[] = [];
