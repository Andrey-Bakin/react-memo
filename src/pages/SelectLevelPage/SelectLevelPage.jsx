import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useGameMode } from "../../components/hooks/useGameMode";
import { useState } from "react";
import { Button } from "../../components/Button/Button";

export function SelectLevelPage() {
  const { setIsSimpleMode } = useGameMode();
  const selectedGameMode = () => {
    setIsSimpleMode(prevstate => !prevstate);
    const [difficult, setDifficult] = useState({});
    const selectDifficult = e => {
      const { name, value } = e.target;
      setDifficult({ ...difficult, [name]: value });
    };
    let number;
    if (difficult.mode === "easy") {
      number = 3;
    }
    if (difficult.mode === "middle") {
      number = 6;
    }
    if (difficult.mode === "hard") {
      number = 9;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <input
            className={styles.levelInput}
            type="radio"
            id="radio1"
            name="mode"
            value="easy"
            onChange={selectDifficult}
          />
          <li className={styles.level}>
            <label className={styles.levelLink} htmlFor="radio1">
              1
            </label>
          </li>
          <input
            className={styles.levelInput}
            type="radio"
            id="radio2"
            name="mode"
            value="middle"
            onChange={selectDifficult}
          />
          <li className={styles.level}>
            <label className={styles.levelLink} htmlFor="radio2">
              2
            </label>
          </li>
          <input
            className={styles.levelInput}
            type="radio"
            id="radio3"
            name="mode"
            value="hard"
            onChange={selectDifficult}
          />
          <li className={styles.level}>
            <label className={styles.levelLink} htmlFor="radio3">
              3
            </label>
          </li>
        </ul>
        <Checkbox id={"modeCheckbox"} name={"modeCheckbox"} label={"Игра до 3 ошибок"} onClick={selectedGameMode} />
        <Link to={`/game/${number}`}>
          <Button>Играть</Button>
        </Link>
        <Link to="/leaderboard">
          <div className={styles.leaderBoardLink}>Перейти к лидерборду</div>
        </Link>
      </div>
    </div>
  );
}
