import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useGameMode } from "../../components/hooks/useGameMode";

export function SelectLevelPage() {
  const { setIsSimpleMode } = useGameMode();
  const selectedGameMode = () => {
    setIsSimpleMode(prevstate => !prevstate);
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <Checkbox id={"modeCheckbox"} nsme={"modeCheckbox"} label={"Игра до 3 ошибок"} onClick={selectedGameMode} />
      </div>
    </div>
  );
}
