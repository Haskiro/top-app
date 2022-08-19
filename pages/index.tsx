import { Htag, Button } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      Ассалам алейкум
      <Htag tag="h3">Текст</Htag>
      <Button appearence='primary' arrow='down'>Кнопка</Button>
      <Button appearence='ghost' arrow='right'>Кнопка</Button>
    </div>
  );
}
