// src/types/index.ts

export interface Expense {
  id: string;
  userId: string;
  amount: number;
  category: Category;
  description: string;
  date: Date;
  imageUrl?: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface User {
  id: string;
  email: string;
  displayName?: string;
  monthlyBudget?: number;
}

export interface Budget {
  id: string;
  userId: string;
  monthlyLimit: number;
  currentSpent: number;
  month: string; // Format: "2025-02"
}

export type Category =
  | "Food"
  | "Transport"
  | "Entertainment"
  | "Health"
  | "Shopping"
  | "Housing"
  | "Bills"
  | "Other";

export interface CategoryStat {
  category: Category;
  total: number;
  percentage: number;
  count: number;
}

export interface MonthlyStats {
  totalSpent: number;
  expenseCount: number;
  averagePerDay: number;
  categoryBreakdown: CategoryStat[];
}
