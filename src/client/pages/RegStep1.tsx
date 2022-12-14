import React, { ButtonHTMLAttributes, SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { DateOfBirthInput } from "../components/DateOfBirthInput";
import { useRegData } from "../hooks/useRegData";

export const RegStep1: React.FC = () => {
  let navigate = useNavigate();
  const [dataValid, setDataValid] = useState<boolean>(false);
  const userName = useInput(["isEmpty", "validUserName"]);
  const userSurname = useInput(["isEmpty", "validUserName"]);
  const [userBirthData, setUserBirthData] = useState<Date>(new Date());

  useEffect(() => {
    setDataValid(userName.isValid && userSurname.isValid);
  }, [userName.isValid, userSurname.isValid]);

  const regData = useRegData();
  
  const setRegData = () =>
    regData.setState({
      username: userName.value,
      surname: userSurname.value,
      dateOfBirth: userBirthData,
    });

  const handleClickNext = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (dataValid) {
      await setRegData();
      navigate("/Registration/Step2");
    }
  };

  return (
    <main className="">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl border-2 rounded border-black px-2 pt-2 pb-4 text-center w-full">Регистрация</h1>
        <p className="text-gray-500 text-center">Укажи имя и фамилию</p>
        <form
          className="flex flex-col max-w-120"
          action=""
          onKeyDown={e => {
            if (e.key == "Enter") {handleClickNext}
          }}
        >
          <span className="text-gray-500 text-center">Имя</span>
          <input
            value={userName.value}
            onChange={userName.onChange}
            // onBlur={userName.onBlur}
            className="border-solid border-gray-400 border rounded px-1 bg-blue-100"
            type="text"
            placeholder="Анна"
          />
          <span className="text-gray-500 text-center">Фамилия</span>
          <input
            value={userSurname.value}
            onChange={userSurname.onChange}
            // onBlur={userSurname.onBlur}
            className="border-solid border-gray-400 border rounded px-1 bg-blue-100"
            type="text"
            placeholder="Ильина"
          />
          <span className="text-gray-500 text-center">Дата рождения</span>
          <DateOfBirthInput setUserBirthData={setUserBirthData} />
          <div className="flex gap-5 self-center my-5">
            <button
              onClick={e => {
                e.preventDefault();
                navigate("/Auth");
              }}
              className="border-solid border-gray-400 border text-sm leading-6 font-medium py-2 px-3 rounded-lg w-28"
            >
              Назад
            </button>
            <button
              onClick={handleClickNext}
              className={
                "text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg w-28 " +
                (dataValid ? "bg-orange-600" : "bg-gray-500")
              }
            >
              Далее
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
