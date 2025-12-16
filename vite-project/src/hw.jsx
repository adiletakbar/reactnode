import { useState } from "react";

function Hw() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Учебная доска",
      description: "Доска для заданий и конспектов по React",
      createdAt: "2025-03-15",
    },
    {
      id: 2,
      title: "Изучать JS",
      description: "Изучать",
      createdAt: "2025-03-16",
    },
  ]);

  const handleAddBoard = () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const createdAt = document.querySelector("#createdAt").value;

    const newBoard = {
      id: Date.now(),
      title,
      description,
      createdAt,
    };

    setBoards((prevBoards) => [...prevBoards, newBoard]);

    // Очистка полей
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#createdAt").value = "";
  };

  const handleRemoveBoard = (idToRemove) => {
    setBoards(boards.filter((board) => board.id !== idToRemove));
  };

  return (
    <div>
      <h1>Список досок</h1>

      <input type="text" placeholder="Название доски" id="title" /> <br />
      <input type="text" placeholder="Описание" id="description" /> <br />
      <input type="date" id="createdAt" /> <br />
      <button onClick={handleAddBoard}>Добавить доску</button>

      <ul>
        {boards.map((board) => (
          <li key={board.id}>
            <strong>{board.title}</strong> — {board.description} (Создано: {board.createdAt})
            <button onClick={() => handleRemoveBoard(board.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hw;
