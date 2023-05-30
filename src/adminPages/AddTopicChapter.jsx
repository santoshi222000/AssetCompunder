import React from "react";
import Sidebaradmin from "../admin/Sidebaradmin";
import AddCourseChapterTopic from "../admin/AddCourseChapterTopic";
import Topic from "../admin/Topic";

function AddTopicChapter() {
  return (
      <div className="dashboard">
        <Sidebaradmin />
        <Topic />
      </div>
  );
}

export default AddTopicChapter;
