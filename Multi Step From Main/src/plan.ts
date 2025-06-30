import type { Plan } from './components/PlanItem';
import type { PackPlan } from './components/AddOn';

export const plans: Plan[] = [
  {
    id: "Arcade",
    title: "Arcade",
    priceM: 9,
    priceY: 90,
    icon: "icon-arcade.svg",
  },
  {
    id: "Advanced",
    title: "Advanced",
    priceM: 12,
    priceY: 120,
    icon: "icon-advanced.svg",
  },
  {
    id: "Pro",
    title: "Pro",
    priceM: 15,
    priceY: 15,
    icon: "icon-pro.svg",
  },
];


export const packPlans: PackPlan[] = [
  {
    id: "Online Services",
    title: "Online Services",
    description: "Access to multiplayer games",
    priceMonth: 1,
    priceYear: 10,
  },
  {
    id: "Large Storage",
    title: "Large Storage",
    description: "Extra 1TB of cloud save",
    priceMonth: 2,
    priceYear: 20,
  },
  {
    id: "Customizable profile",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    priceMonth: 2,
    priceYear: 20,
  }
];