import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./common/Button";
import Modal from "./common/Modal";

function Main() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* 공통 컴포넌트 */}
      {/* Common Button */}
      <Button size="medium" outline onClick={() => { setShowModal(true); }}>모달</Button>

      {/* Swiper */}
      <Button size="medium" outline onClick={() => { navigate('/swiper'); }}>Swiper</Button>

      {/* Framer Motion */}
      <Button size="medium" outline onClick={() => { navigate('/motion'); }}>Framer Motion</Button>

      {/* FullCalendar */}
      <Button size="medium" outline onClick={() => { navigate('/calendar'); }}>FullCalendar</Button>

      {/* Common Modal */}
      <Modal
        title="경고"
        size="small"
        cancelText="취소"
        confirmText="삭제"
        onCancel={() => {
          setShowModal(false);
        }}
        onConfirm={undefined}
        visible={showModal}
      >
        삭제하시겠습니까?
      </Modal>
    </>
  );
}

export default Main;