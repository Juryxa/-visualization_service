import React, {useState} from 'react';
import './Shutter.css';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';

const Shutter = () => {

      const [isOpen, setIsOpen] = useState(false);






      const closeShutter = () => setIsOpen(false); // Функция для закрытия шторки
      const [selectedDepartment, setSelectedDepartments] = useState<string | null>(null);
      const [selectedFblock, setSelectedFblock] = useState<string | null>(null);
      const [selectedDepartments2, setSelectedDepartments2] = useState<string | null>(null);
      const [selectedDepartments3, setSelectedDepartments3] = useState<string | null>(null);
      const [selectedDepartments4, setSelectedDepartments4] = useState<string | null>(null);
      const [selectedRole, setSelectedRole] = useState<string | null>(null);
      const [isFocused,setIsFocused]= useState<boolean>(false)


      return (
          <div>
              <div className='shutter-content'>

        {/* Выбор подразделения */}
        <FormControl variant="outlined" sx={{ Width: 240, height: 40, borderRadius: '20px' }}>
  <InputLabel
      shrink={selectedDepartment !== ''} // Лейбл поднимется и исчезнет, если есть значение
      sx={{
        fontSize: '16px',
        lineHeight: '40px',
        color: selectedDepartment ? 'transparent' : '#808080', // Серый цвет, если нет значения
        transform:  'none', // Поднимаем, если есть значение или фокус
        transition: 'transform 0.2s ease, color 0.2s ease', // Плавный переход
        paddingLeft: '10px', // Отступ справа для сдвига текста
        '&.Mui-focused': {
          color: 'transparent', // Цвет лейбла при фокусе (он исчезает)
        },
      }}
    >
      Подразделение
    </InputLabel>
    <Select
      value={selectedDepartment}
      onChange={(e) => setSelectedDepartments(e.target.value)}
      label="Подразделение" // Это необходимо для синхронизации с InputLabel
      sx={{
        height: '40px',
        borderRadius: '20px',
        padding: '0 10px',
        fontSize: '16px',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        '&:focus': {
          borderColor: '#d1d1d1',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#d1d1d1',
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 200,
          },
        },
      }}
    >
          <MenuItem value="">
              <em>Все</em>
          </MenuItem>
          <MenuItem value="dep1">Центральный офис</MenuItem>
          <MenuItem value="dep2">Филиал в Оренбургской области</MenuItem>
          <MenuItem value="dep3">Филиал в Волгоградской области</MenuItem>
      </Select>
  </FormControl>


        {/* Выбор функциональный блок*/}
        <FormControl variant="outlined" sx={{    height: 40, borderRadius: '20px' }}>
  <InputLabel
      shrink={selectedFblock !== ''} // Лейбл поднимется и исчезнет, если есть значение
      sx={{
        fontSize: '16px',
        lineHeight: '40px',
        color: selectedFblock ? 'transparent' : '#808080', // Серый цвет, если нет значения
        transform:  'none', // Поднимаем, если есть значение или фокус
        transition: 'transform 0.2s ease, color 0.2s ease', // Плавный переход
        paddingLeft: '10px', // Отступ справа для сдвига текста
        '&.Mui-focused': {
          color: 'transparent', // Цвет лейбла при фокусе (он исчезает)
        },
      }}
    >
    Функциональный блок
    </InputLabel>
    <Select
      value={selectedFblock}
      onChange={(e) => setSelectedFblock(e.target.value)}
      label="Функциональный блок" // Это необходимо для синхронизации с InputLabel
      sx={{
        height: '40px',
        borderRadius: '20px',
        padding: '0 10px',
        fontSize: '16px',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        '&:focus': {
          borderColor: '#d1d1d1',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#d1d1d1',
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 200,
          },
        },
      }}
    >
          <MenuItem value="">
              <em>Все</em>
          </MenuItem>
          <MenuItem value="dep1">Корпоративный блок</MenuItem>
          <MenuItem value="dep2">Розничный блок</MenuItem>

      </Select>
  </FormControl>

  <FormControl variant="outlined" sx={{ Width: 240, height: 40, borderRadius: '20px' }}>
  <InputLabel
      shrink={selectedDepartments2 !== ''} // Лейбл поднимется и исчезнет, если есть значение
      sx={{
        fontSize: '16px',
        lineHeight: '40px',
        color: selectedDepartments2 ? 'transparent' : '#808080', // Серый цвет, если нет значения
        transform:  'none', // Поднимаем, если есть значение или фокус
        transition: 'transform 0.2s ease, color 0.2s ease', // Плавный переход
        paddingLeft: '10px', // Отступ справа для сдвига текста
        '&.Mui-focused': {
          color: 'transparent', // Цвет лейбла при фокусе (он исчезает)
        },
      }}
    >
      Подразделение 2
    </InputLabel>
    <Select
      value={selectedDepartments2}
      onChange={(e) => setSelectedDepartments2(e.target.value)}
      onFocus={() => setIsFocused(true)} // Устанавливаем фокус
      onBlur={() => setIsFocused(false)} // Снимаем фокус
      label="Подразделение 2" // Это необходимо для синхронизации с InputLabel
      sx={{
        height: '40px',
        borderRadius: '20px',
        padding: '0 10px',
        fontSize: '16px',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        '&:focus': {
          borderColor: '#d1d1d1',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#d1d1d1',
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 200,
          },
        },
      }}
    >
          <MenuItem value="">
              <em>Все</em>
          </MenuItem>
          <MenuItem value="dep2.1">Онлайн-банкинг для бизнеса</MenuItem>
  <MenuItem value="dep2.2">Транзакционные продукты</MenuItem>
  <MenuItem value="dep2.3">Управление по работе с филиалами</MenuItem>
  <MenuItem value="dep2.4">Онлайн-банкинг</MenuItem>
  <MenuItem value="dep2.5">Управление по работе с клиентами крупного и среднего бизнеса</MenuItem>
  <MenuItem value="dep2.6">Управление по работе с клиентами малого бизнеса</MenuItem>
  <MenuItem value="dep2.7">Управление ипотечного кредитования</MenuItem>
  <MenuItem value="dep2.8">Управление инвестиционных продуктов</MenuItem>
      </Select>
  </FormControl>

  <FormControl variant="outlined" sx={{ Width: 240, height: 40, borderRadius: '20px' }}>
  <InputLabel
      shrink={selectedDepartments3 !== ''} // Лейбл поднимется и исчезнет, если есть значение
      sx={{
        fontSize: '16px',
        lineHeight: '40px',
        color: selectedDepartments3 ? 'transparent' : '#808080', // Серый цвет, если нет значения
        transform:  'none', // Поднимаем, если есть значение или фокус
        transition: 'transform 0.2s ease, color 0.2s ease', // Плавный переход
        paddingLeft: '10px', // Отступ справа для сдвига текста
        '&.Mui-focused': {
          color: 'transparent', // Цвет лейбла при фокусе (он исчезает)
        },
      }}
    >
      Подразделение 3
    </InputLabel>
    <Select
      value={selectedDepartments3}
      onChange={(e) => setSelectedDepartments3(e.target.value)}

      label="Подразделение 3" // Это необходимо для синхронизации с InputLabel
      sx={{
        height: '40px',
        borderRadius: '20px',
        padding: '0 10px',
        fontSize: '16px',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        '&:focus': {
          borderColor: '#d1d1d1',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#d1d1d1',
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 200,
          },
        },
      }}
    >
          <MenuItem value="">
              <em>Все</em>
          </MenuItem>
          <MenuItem value="dep1">команда 1</MenuItem>
          <MenuItem value="dep2">команда 2</MenuItem>
          <MenuItem value="dep3">Отдел продаж 1</MenuItem>
          <MenuItem value="dep4">Отдел продаж 2</MenuItem>
          <MenuItem value="dep5">Отдел кредитования</MenuItem>
      </Select>
  </FormControl>

  <FormControl variant="outlined" sx={{ Width: 240, height: 40, borderRadius: '20px' }}>
  <InputLabel
      shrink={selectedDepartments4 !== ''} // Лейбл поднимется и исчезнет, если есть значение
      sx={{
        fontSize: '16px',
        lineHeight: '40px',
        color: selectedDepartments4 ? 'transparent' : '#808080', // Серый цвет, если нет значения
        transform:  'none', // Поднимаем, если есть значение или фокус
        transition: 'transform 0.2s ease, color 0.2s ease', // Плавный переход
        paddingLeft: '10px', // Отступ справа для сдвига текста
        '&.Mui-focused': {
          color: 'transparent', // Цвет лейбла при фокусе (он исчезает)
        },
      }}
    >
      Подразделение 4
    </InputLabel>
    <Select
      value={selectedDepartments4}
      onChange={(e) => setSelectedDepartments4(e.target.value)}
      onFocus={() => setIsFocused(true)} // Устанавливаем фокус
      onBlur={() => setIsFocused(false)} // Снимаем фокус
      label="Подразделение 4" // Это необходимо для синхронизации с InputLabel
      sx={{
        height: '40px',
        borderRadius: '20px',
        padding: '0 10px',
        fontSize: '16px',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        '&:focus': {
          borderColor: '#d1d1d1',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#d1d1d1',
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 200,
          },
        },
      }}
    >
          <MenuItem value="">
              <em>Все</em>
          </MenuItem>
          <MenuItem value="dep1">Дополнительный офис 1</MenuItem>
          <MenuItem value="dep2">Дополнительный офис 2</MenuItem>
          <MenuItem value="dep3">Дополнительный офис 3</MenuItem>
          <MenuItem value="dep4">Дополнительный офис 4</MenuItem>
      </Select>
  </FormControl>



  <FormControl variant="outlined" sx={{ Width: 240, height: 40, borderRadius: '20px' }}>
  <InputLabel
      shrink={selectedRole !== ''} // Лейбл поднимется и исчезнет, если есть значение
      sx={{
        fontSize: '16px',
        lineHeight: '40px',
        color: selectedRole ? 'transparent' : '#808080', // Серый цвет, если нет значения
        transform:  'none', // Поднимаем, если есть значение или фокус
        transition: 'transform 0.2s ease, color 0.2s ease', // Плавный переход
        paddingLeft: '10px', // Отступ справа для сдвига текста
        '&.Mui-focused': {
          color: 'transparent', // Цвет лейбла при фокусе (он исчезает)
        },
      }}
    >
      Роль
    </InputLabel>
    <Select
      value={selectedRole}
      onChange={(e) => setSelectedRole(e.target.value)}
      onFocus={() => setIsFocused(true)} // Устанавливаем фокус
      onBlur={() => setIsFocused(false)} // Снимаем фокус
      label="Ваша роль" // Это необходимо для синхронизации с InputLabel
      sx={{
        height: '40px',
        borderRadius: '20px',
        padding: '0 10px',
        fontSize: '16px',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        '&:focus': {
          borderColor: '#d1d1d1',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#d1d1d1',
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 200,
          },
        },
      }}
    >
      <MenuItem value="">
        <em>Все</em>
      </MenuItem>
      <MenuItem value="dep2.1">Онлайн-банкинг для бизнеса</MenuItem>
      <MenuItem value="dep2.2">Транзакционные продукты</MenuItem>
      <MenuItem value="dep2.3">Управление по работе с филиалами</MenuItem>
      <MenuItem value="dep2.4">Онлайн-банкинг</MenuItem>
      <MenuItem value="dep2.5">Управление по работе с клиентами крупного и среднего бизнеса</MenuItem>
      <MenuItem value="dep2.6">Управление по работе с клиентами малого бизнеса</MenuItem>
      <MenuItem value="dep2.7">Управление ипотечного кредитования</MenuItem>
      <MenuItem value="dep2.8">Управление инвестиционных продуктов</MenuItem>
    </Select>
  </FormControl>











                {/* Пример с TextField */}
                <input type="text" className="rounded-input" placeholder="Должность" />
                <input type="text" className="rounded-input" placeholder="Фамилию" />
                <input type="text" className="rounded-input" placeholder="Имя" />
                <input type="text" className="rounded-input" placeholder="Телефон" />
    <input type="text" className="rounded-input" placeholder="Адрес" />


                <button className="rounded-button">Применить</button>

                </div>
          </div>
      );
  };

  export default Shutter;