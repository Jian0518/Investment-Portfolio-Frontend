import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  portfolioSummary = {
    totalValue: 250000,
    totalReturn: 15000,
    returnPercentage: 6.38
  };

  assetAllocation = [
    { category: 'Stocks', percentage: 60 },
    { category: 'Bonds', percentage: 25 },
    { category: 'Cash', percentage: 10 },
    { category: 'Other', percentage: 5 }
  ];

  investments = [
    {
      name: 'Apple Inc.',
      symbol: 'AAPL',
      shares: 100,
      currentPrice: 150.25,
      totalValue: 15025,
      returnPercentage: 8.5
    },
    {
      name: 'Microsoft',
      symbol: 'MSFT',
      shares: 85,
      currentPrice: 285.30,
      totalValue: 24250.50,
      returnPercentage: 12.3
    },
    {
      name: 'US Treasury Bond',
      symbol: 'USTB',
      shares: 200,
      currentPrice: 98.50,
      totalValue: 19700,
      returnPercentage: 3.2
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // In real application, these data would be fetched from backend service
  }

  addInvestment(): void {
    // Implement add investment logic
  }

  generateReport(): void {
    // Implement report generation logic
  }
}