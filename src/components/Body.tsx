import React, { useState } from "react";
import { Box } from "@mui/material";
import TopicBox from "./TopicBox";
import NewTopic from "./NewTopic";

const initialData = [
  {
    name: "Test",
    desc: "This is an test desc",
    date: "2023-12-03",
    priority: "medium",
  },
];

function Body() {
  const [todo, setTodo] = useState(initialData);
  const [speak, setSpeak] = useState(initialData);
  const [place, setPlace] = useState(initialData);

  function addNewTopic(data: any) {
    const { name, desc, dueDate, priority, category } = data;

    switch (category) {
      case "Speak":
        setSpeak([...speak, { name, desc, date: dueDate, priority }]);
        break;
      case "Place":
        setPlace([...place, { name, desc, date: dueDate, priority }]);
        break;
      default:
        setTodo([...todo, { name, desc, date: dueDate, priority }]);
        break;
    }
  }
  function delTopic(category: string, name: string) {
    console.log({ category, name });

    switch (category) {
      case "PERSON TO SPEAK":
        setSpeak(speak.filter((item) => item.name !== name));
        break;
      case "PLACES TO VISIT":
        setPlace(place.filter((item) => item.name !== name));
        break;
      default:
        setTodo(todo.filter((item) => item.name !== name));
        break;
    }
  }

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "grid" },
        flexDirection: { xs: "column" },
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 5,
        paddingX: 5,
      }}
    >
      <NewTopic addNewTopic={addNewTopic} />
      <TopicBox title={"TODO"} allTopics={todo} delTopic={delTopic} />
      <TopicBox
        title={"PERSON TO SPEAK"}
        allTopics={speak}
        delTopic={delTopic}
      />
      <TopicBox
        title={"PLACES TO VISIT"}
        allTopics={place}
        delTopic={delTopic}
      />
    </Box>
  );
}

export default Body;
