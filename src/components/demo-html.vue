<div id="app">
  <h1>Vue Todo App</h1>
  <form id="addTodo" @submit.prevent="addTodo">
    <input type="text" 
           v-model="currentTodo.text"
           placeholder="Add a todo">
    <button class="btn btn-primary" 
            type="submit">
      <i class="fa fa-plus"></i>
    </button>
  </form>
  <transition-group name="slide" tag="ul" id="todoList">
    <li class="todo" 
        v-for="(todo, index) in filteredTodos" 
        :key="todo.id">
      <div v-show="todo.editing === false">
        <div class="todo__content">
          <span @click="toggleComplete(todo)" 
                class="todo__text"
                :class="{ complete : todo.complete }"
                >
            <i v-if="!todo.complete" class="fa fa-circle-o"></i>
            <i v-if="todo.complete" class="fa fa-check-circle-o"></i>
            {{ todo.text }}
          </span>
          <span class="todo__buttons">
            <button class="btn btn-primary" 
                    @click="toggleEditing(todo)">
              <i class="fa fa-pencil"></i>
            </button>
            <button class="btn btn-primary" 
                    @click="deleteTodo(todo)">
              <i class="fa fa-times"></i>
            </button>
          </span>
        </div>
      </div>
      <div v-show="todo.editing === true">
        <form @submit.prevent="toggleEditing(todo)"
              class="todo__content">
          <input @input="updateTodo"
                 :value="todo.text"
                 :id="todo.id"
                 class="editing todo__input"
                 ref="edit_input">
          <span class="todo__buttons">
            <button class="btn btn-primary" 
                    type="submit">
              <i class="fa fa-check"></i>
            </button>
          </span>
        </form>
      </div>
    </li>
  </transition-group>
  <div id="filterButtons">
    <button class="btn btn-primary"
            :class="filter === 'all' ? 'active' : ''"
            :disabled="filter === 'all' ? true : false"
            @click="setFilter('all')">
      <i class="fa fa-list"></i>
    </button>
    <button class="btn btn-primary"
            :class="filter === 'incomplete' ? 'active' : ''"
            :disabled="filter === 'incomplete' ? true : false"
            @click="setFilter('incomplete')">
      <i class="fa fa-circle-o"></i>
    </button>
    <button class="btn btn-primary"
            :class="filter === 'complete' ? 'active' : ''"
            :disabled="filter === 'complete' ? true : false"
            @click="setFilter('complete')">
      <i class="fa fa-check-circle-o"></i>
    </button>
  </div>
</div>