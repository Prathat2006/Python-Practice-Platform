import type { ProblemData } from "./pythonRunner";

export const masterQuizProblems: ProblemData[] = [
  {
    title: "1. Sum of Non-Common Elements",
    description: "Find all elements that appear in one series but not the other. Remove the common ones from both sides, then print the sum of everything that remains.\n\nGiven:\n`s1 = [2, 4, 6, 8, 10]`\n`s2 = [1, 2, 3, 4, 5]`",
    topics: ["Sets", "Lists"],
    initialCode: "s1 = [2, 4, 6, 8, 10]\ns2 = [1, 2, 3, 4, 5]\n",
    testCases: [
      {
        input: "",
        expectedOutput: "33",
        testCode: "s1 = [2, 4, 6, 8, 10]\ns2 = [1, 2, 3, 4, 5]\nunion = set(s1).symmetric_difference(set(s2))\nprint(sum(union))",
        isHidden: false
      }
    ]
  },
  {
    title: "2. Dictionary of Squares and Average",
    description: "Create a dictionary where keys are numbers from 1 to 25 and each value is the square of its key. Find the average of the last 10 values and print it.",
    topics: ["Dictionaries", "Math"],
    initialCode: "",
    testCases: [
      {
        input: "",
        expectedOutput: "428.5",
        testCode: "d = {i: i**2 for i in range(1, 26)}\nvals = list(d.values())[-10:]\nprint(sum(vals)/len(vals))",
        isHidden: false
      }
    ]
  },
  {
    title: "3. Frequency of Dictionary Values",
    description: "Count how many times each distinct value appears in the given dictionary. Sum up all those frequency counts and print the cube of that total.\n\nGiven:\n`{'V': 10, 'VI': 10, 'VII': 40, 'VIII': 20, 'IX': 70, 'X': 80, 'XI': 40, 'XII': 20}`",
    topics: ["Dictionaries", "Frequency"],
    initialCode: "d = {'V': 10, 'VI': 10, 'VII': 40, 'VIII': 20, 'IX': 70, 'X': 80, 'XI': 40, 'XII': 20}\n",
    testCases: [
      {
        input: "",
        expectedOutput: "512",
        testCode: "d = {'V': 10, 'VI': 10, 'VII': 40, 'VIII': 20, 'IX': 70, 'X': 80, 'XI': 40, 'XII': 20}\nfreq = {}\nfor v in d.values(): freq[v] = freq.get(v, 0) + 1\nprint(sum(freq.values()) ** 3)",
        isHidden: false
      }
    ]
  },
  {
    title: "4. Filtered List and Sum of Squares",
    description: "Take numbers 1 to 100 as list1. Extract numbers divisible by 4 into list2. Pick every 5th element from list2 into list3. Print the sum of squares of list3 elements.",
    topics: ["Lists", "Filtering"],
    initialCode: "list1 = list(range(1, 101))\n",
    testCases: [
      {
        input: "",
        expectedOutput: "22000",
        testCode: "list1 = list(range(1, 101))\nlist2 = [x for x in list1 if x % 4 == 0]\nlist3 = list2[4::5]\nprint(sum(x**2 for x in list3))",
        isHidden: false
      }
    ]
  },
  {
    title: "5. Average Salary of Female Employees",
    description: "A company has 50 employees numbered 1 to 50. Salary = 80000 + ID × 100. An employee is female if their ID is divisible by 3, otherwise male. Generate this dataset using Pandas, find the average salary of female employees, round to nearest integer, and print it.",
    topics: ["Pandas", "Dataframes"],
    initialCode: "import pandas as pd\n",
    testCases: [
      {
        input: "",
        expectedOutput: "82550",
        testCode: "import pandas as pd\ndf = pd.DataFrame({'ID': range(1, 51)})\ndf['Salary'] = 80000 + df['ID'] * 100\nfemale_mask = df['ID'] % 3 == 0\nprint(int(round(df[female_mask]['Salary'].mean())))",
        isHidden: false
      }
    ]
  },
  {
    title: "6. Maximum Price Difference Across Brands",
    description: "You have asking prices for vehicles (some brands appear more than once) and fair market prices (one per brand). For each listing, compute the absolute difference between asking and fair price for that brand. Print the maximum difference.\n\nGiven:\n`asking_prices = [5000, 7600, 9000, 8500, 7000]` with index `['civic','civic','camry','mustang','mustang']`\n`fair_prices = [5500, 7500, 7500]` with index `['civic','mustang','camry']`",
    topics: ["Pandas", "Series"],
    initialCode: "import pandas as pd\n",
    testCases: [
      {
        input: "",
        expectedOutput: "2100",
        testCode: "import pandas as pd\nasking = pd.Series([5000, 7600, 9000, 8500, 7000], index=['civic','civic','camry','mustang','mustang'])\nfair = pd.Series([5500, 7500, 7500], index=['civic','mustang','camry'])\ndiff = (asking - fair).abs()\nprint(int(diff.max()))",
        isHidden: false
      }
    ]
  },
  {
    title: "7. Difference Between Math and Science Marks",
    description: "For each row in the dataset, compute math marks minus science marks. Sum all those differences and print the total.\n\nGiven:\nNames = `['John','Matt','John','Cateline']`\nmath_Marks = `[18,20,19,15]`\nscience_Marks = `[10,20,15,12]`",
    topics: ["Pandas", "Dataframes"],
    initialCode: "import pandas as pd\n",
    testCases: [
      {
        input: "",
        expectedOutput: "15",
        testCode: "import pandas as pd\ndf = pd.DataFrame({'math': [18,20,19,15], 'science': [10,20,15,12]})\nprint((df['math'] - df['science']).sum())",
        isHidden: false
      }
    ]
  },
  {
    title: "8. Average Insurance Charges by Age Range",
    description: "You are given the insurance dataset. Filter it to people aged 30 to 40 (inclusive), compute the average insurance charges, round to the nearest integer, and print the result.\n```python\ndata = {\n  'Age': [19, 27, 28, 33, 32, 31, 46, 37, 37],\n  'Insurance Charges': [16884.924, 1725.5523, 4449, 21984.47061, 3866.8552, 3756.6216, 8240.5896, 7281.5056, 6406.4107]\n}\n```",
    topics: ["Pandas", "Filtering"],
    initialCode: "import pandas as pd\n",
    testCases: [
      {
        input: "",
        expectedOutput: "8659",
        testCode: "import pandas as pd\ndata = {'Age': [19, 27, 28, 33, 32, 31, 46, 37, 37], 'Insurance Charges': [16884.924, 1725.5523, 4449, 21984.47061, 3866.8552, 3756.6216, 8240.5896, 7281.5056, 6406.4107]}\ndf = pd.DataFrame(data)\nfiltered = df[(df['Age'] >= 30) & (df['Age'] <= 40)]\nprint(int(round(filtered['Insurance Charges'].mean())))",
        isHidden: false
      }
    ]
  },
  {
    title: "9. Subtract Two Pandas Series",
    description: "Subtract the second series from the first element-wise. Cube each element of the result and print the sum of those cubes.\n\nGiven:\n`s1 = [2, 4, 6, 8, 10]` and `s2 = [1, 3, 5, 7, 10]`",
    topics: ["Pandas", "Series Math"],
    initialCode: "import pandas as pd\ns1 = pd.Series([2, 4, 6, 8, 10])\ns2 = pd.Series([1, 3, 5, 7, 10])\n",
    testCases: [
      {
        input: "",
        expectedOutput: "4",
        testCode: "import pandas as pd\ns1 = pd.Series([2, 4, 6, 8, 10])\ns2 = pd.Series([1, 3, 5, 7, 10])\nprint(((s1 - s2)**3).sum())",
        isHidden: false
      }
    ]
  },
  {
    title: "10. Budget Difference at Maximum Sales",
    description: "You are given advertising data. Find the row with maximum Sales, compute TV minus Radio in that row, round to nearest integer, and print it.\n```python\ndata = {\n  'TV': [230.1, 44.5, 17.2, 151.5, 180.8, 8.7, 57],\n  'Radio': [37.8, 39.3, 45.9, 41.3, 10.8, 48.9, 32],\n  'Sales': [22.1, 10.4, 12.0, 16.5, 17.9, 7.2, 11]\n}\n```",
    topics: ["Pandas", "Querying"],
    initialCode: "import pandas as pd\n",
    testCases: [
      {
        input: "",
        expectedOutput: "192",
        testCode: "import pandas as pd\ndata = {'TV': [230.1, 44.5, 17.2, 151.5, 180.8, 8.7, 57], 'Radio': [37.8, 39.3, 45.9, 41.3, 10.8, 48.9, 32], 'Sales': [22.1, 10.4, 12.0, 16.5, 17.9, 7.2, 11]}\ndf = pd.DataFrame(data)\nmax_sales_row = df.loc[df['Sales'].idxmax()]\nprint(int(round(max_sales_row['TV'] - max_sales_row['Radio'])))",
        isHidden: false
      }
    ]
  },
  {
    title: "11. Merge and Square the Sum",
    description: "You are given two lists of integers. Merge them into one list, compute the sum of all elements, and print the square of that sum.\n\nGiven:\n`a = [1, 2, 3, -7, -3, -5]`\n`b = [14, 5, 6, 8, 9, 10]`",
    topics: ["Lists", "Math"],
    initialCode: "a = [1, 2, 3, -7, -3, -5]\nb = [14, 5, 6, 8, 9, 10]\n",
    testCases: [
      {
        input: "",
        expectedOutput: "1849",
        testCode: "a = [1, 2, 3, -7, -3, -5]\nb = [14, 5, 6, 8, 9, 10]\nmerged = a + b\nprint(sum(merged) ** 2)",
        isHidden: false
      }
    ]
  },
  {
    title: "12. Combine Dictionaries by Adding Values",
    description: "Merge two dictionaries into one. If a key exists in both, add the values together. Then print the sum of all values in the combined dictionary.\n\nGiven:\n`d1 = {'a':100,'b':200,'c':300,'d':350}`\n`d2 = {'a':150,'b':250,'e':200}`",
    topics: ["Dictionaries", "Aggregations"],
    initialCode: "d1 = {'a':100,'b':200,'c':300,'d':350}\nd2 = {'a':150,'b':250,'e':200}\n",
    testCases: [
      {
        input: "",
        expectedOutput: "1550",
        testCode: "d1 = {'a':100,'b':200,'c':300,'d':350}\nd2 = {'a':150,'b':250,'e':200}\nc = d1.copy()\nfor k, v in d2.items(): c[k] = c.get(k, 0) + v\nprint(sum(c.values()))",
        isHidden: false
      }
    ]
  },
  {
    title: "13. Common Elements and Their Squares",
    description: "Find elements common to both series, keep only the ones less than 30, square them, and print the sum of those squares.\n\nGiven:\n`s1 = [12, 25, 30, 45, 50]` and `s2 = [10, 25, 35, 40, 50]`",
    topics: ["Pandas", "Filtering"],
    initialCode: "import pandas as pd\ns1 = pd.Series([12, 25, 30, 45, 50])\ns2 = pd.Series([10, 25, 35, 40, 50])\n",
    testCases: [
      {
        input: "",
        expectedOutput: "625",
        testCode: "import pandas as pd\ns1 = pd.Series([12, 25, 30, 45, 50])\ns2 = pd.Series([10, 25, 35, 40, 50])\ncommon = pd.Series(list(set(s1) & set(s2)))\nfiltered = common[common < 30]\nprint((filtered**2).sum())",
        isHidden: false
      }
    ]
  }
];
