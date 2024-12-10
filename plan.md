- створюємо contactsOps.js
- прописуємо асинхронний запит export const fetchContacts = createAsyncThunk
- передаємо цюфункцію в App: const dispatch = useDispatch(); useEffect(() => {
  dispatch(fetchContacts()); // Виклик dispatch }, [dispatch]);
- обовязково роьимо через useEffect() щоб в момент рендера виконався запит і
  відрендерити дані
- у export const fetchContacts = createAsyncThunk через return response.data
  отримуємо дані в payload
- в слайсі чере екстраредьюсер ловимо дані
- створюємо .addCase .addCase(fetchContacts.fulfilled, (state, action) => {
  state.items = action.payload;}}
- тут ловимо стан fulfilled (отримані дані) і записуємо в items дані із
  отриманого payload
- (state — це поточний стан гілки Redux-стору, для якої визначений цей
  ред'юсер.)

Логіка запиту:

1. в contactsOps.js сворили запит
2. дані запиту відрендерили в Арр

- прописуємо спеціальний обєкт thunkAPI.rejectWithValue щоб не впав сайт а
  видало помилку async (\_, thunkAPI) => { ...... } catch (error) {
  rejectWithValue return thunkAPI.rejectWithValue(error.message);}

Логіка видалення:

1. в contactsOps.js сворили функцію на видалення
2. цю функцію через dispatch передаємо в кнопку видалення (знаходиться в
   Contact.jsx) і вказуємо їй яке id треба видалити (видаляється на сервері)
3. додаємо відповідний addCase на видалення в контактсСлайс щоб видалилось
   локально (Логіка state.items = state.items.filter(item => item.id !==
   action.payload.id) дозволяє видалити елемент з масиву state.items, де id
   елемента збігається з id, переданим в action.payload)

dispatch ініціює екшен deleteContact(id) і передає його до Redux. Redux обробляє
цей екшен і викликає відповідні ред'юсери, щоб оновити стан. React автоматично
перерендерює компонент Contact із оновленим станом.

Логіка і порядок loading і error:

1. ініціалізуємо початкові стани в contactsSlice.js
2. додаємо через інструмент .addMatcher в extraReducers длякожного випадку та
   відповідних дій - відповідні стани
3. виводимо експорні константи selectLoading та selectError
4. в Арр встановлюємо const loading = useSelector(selectLoading)
5. добавляємо в місце рендера {loading && <h2>Loading.......</h2>}
