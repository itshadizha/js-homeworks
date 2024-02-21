"My name is:";

      "Simon";

      "My name is:" + "Simon";

      "Total cost: $" + "(5 + 3)";

      `Total cost: $${3 + 5}`;

      alert(`Total cost: $${3 + 5}`);

      "Total cost: $" + "((599 + 295) / 100)";

      `Total cost: $${(599 + 295) / 100}`;

      alert(`Total cost: $${(599 + 295) / 100}. Thank you, come again!`);

      "Items (4): $" + "(2 * 2095 + 2 * 799 / 100)";

      "Shipping & handling: $" + "(499 + 499 / 100)";

      "Total before tax: $" + "( 2 * 2095 + 2 * 799  + 499 + 499 / 100)";

      `Estimated tax (10%): $${Math.round((2 * 2095 + 2 * 499 + 499) * 0.1) / 100}`;

      const name = "Simon";

      console.log("My name is:" + name);

      let cost = 5 + 2 * 3 + 9;

      console.log("Cost of food:" + cost);

      let tax = cost * 0.1;

      let totalCost = cost + tax;

      console.log(`Total cost:$ ${totalCost}`);