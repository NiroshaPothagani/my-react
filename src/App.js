import ExpenseItem from './components/Expenses/ExpenseItem.js';
import Expenses from '../src/components/Expenses/Expenses'

const App = () => {
  
  const expenses = [
    {
      id: 'a1',
      title: 'Car Insurense',
      amount: 2944.67,
      date: new Date(2021, 2, 26),
    },
    {
      id: 'a2',
      title: 'life Insurense',
      amount: 7654.42,
      date: new Date(2021, 9, 22),
    },
    {
      id: 'a3',
      title: 'study loans',
      amount: 6984.52,
      date: new Date(2021, 9, 2),
    },
    {
      id: 'a4',
      title: 'Home loans',
      amount: 5665.56,
      date: new Date(2021, 7, 6),
    },
  ];

  return (
    <div>
      <Expenses items={expenses} />

    </div>
  );
}
export default App;