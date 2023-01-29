// @ts-check

/**
 * Tag
 * @typedef {Object} Tag
 * @property {number} tagId - 태그 아이디(required)
 * @property {string} tagContent - 태그(optional)
 */
const initTag = {
  tagId: 1,
  tagContent: '',
};

/**
 * @typedef {Tag[]} TagList
 * @property {Tag} tag - 태그(optional)
 */

/**
 * @type {TagList}
 */
const tagList = [initTag];

/**
 * Todo
 * @typedef {Object} Todo
 * @property {number} todoId - 아이디(required)
 * @property {string} content - 내용(required)
 * @property {boolean} completed - 완료여부(required)
 * @property {string} category - 카테고리(required)
 * @property {TagList} tags - 태그들(optional)
 */

/**
 * @type {Todo}
 */
const initData = {
  todoId: 1,
  content: 'study typescript',
  completed: false,
  category: 'typescript',
  tags: tagList,
};

/**
 * @typedef {Todo[]} TodoList
 * @property {Todo} todo - 할 일(required)
 */

/**
 * @type {TodoList}
 */
const todoList = [initData];

/**
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 * @param {string} content - 내용
 * @param {boolean} completed - 완료여부
 * @param {string} category - 카테고리
 */
const addTodo = (content, completed, category) => {};

/**
 * 모든 할 일을 조회할 수 있다.
 * @returns {TodoList}
 */
const getTodoList = () => {
  return todoList;
};

/**
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {number} todoId - 아이디
 * @returns {Todo}
 */
const getTodoDetail = (todoId) => {
  return initData;
};

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * @param {Todo} todo - 할 일
 */
const updateTodo = (todo) => {};

/**
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {number} todoId - 아이디
 * @param {Tag} tagId - 태그 아이디
 */
const updateTags = (todoId, tagId) => {};

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {number} todoId - 아이디
 */
const removeTodo = (todoId) => {};

/**
 * 모든 할 일을 제거할 수 있다.
 * @returns {TodoList}
 */
const removeTodoList = () => {
  return [];
};

/**
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @param {number} todoId - 아이디
 * @param {Tag} tagId - 태그 아이디
 */
const removeTag = (todoId, tagId) => {};

/**
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {number} todoId - 아이디
 */
const removeAllTag = (todoId) => {
  return (initData.tags = []);
};
