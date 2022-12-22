import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../hooks/useUserData";
import { IModalProps, Modal } from "./Modal";

export const ModalSendInvite: React.FC<PropsWithChildren<IModalProps>> = ({ isVisible, setVisible }) => {
  const navigate = useNavigate();
  const logout = useUserData().nullifyData;


const sendInvitation = () => {
  // Отправляем email или номер телефона на сервер
}

  return (
    <Modal isVisible={isVisible} setVisible={setVisible}>
      <span>Чтобы разблокировать доступ к контенту, необходимо согласие родителя.</span>
      <label className="flex flex-col">
        Введите номер телефона или email, чтобы пригласить родителя
        <input type="text" className="border-solid border-gray-400 border rounded px-1 " />
      </label>
      <div>
        <button
          className="text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg bg-orange-600 mx-2"
          onClick={() => setVisible(false)}
        >
          Отмена
        </button>
        <button
          className="text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg bg-orange-600 mx-2"
          onClick={() => {
            sendInvitation();
            navigate("/Invite")
            logout()}}
        >
          Отправить приглашение
        </button>
      </div>
    </Modal>
  );
};
