<template>
  <q-page padding>
    <div class="text-h4 q-mb-lg">
      📝 Task Manager (Lab 2.1)
    </div>

    <!-- Create Task -->
    <q-card class="q-mb-lg">
      <q-card-section>
        <div class="text-h6">เพิ่มงานใหม่</div>

        <q-input
          v-model="title"
          label="Title"
          outlined
          class="q-mb-md"
        />

        <q-input
          v-model="description"
          label="Description"
          type="textarea"
          outlined
          class="q-mb-md"
        />

        <q-btn
          color="primary"
          label="Add Task"
          @click="addTask"
        />
      </q-card-section>
    </q-card>

    <!-- Task List -->
    <q-card>
      <q-card-section>
        <div class="text-h6">รายการงาน</div>

        <q-list bordered separator v-if="tasks.length">
          <q-item v-for="task in tasks" :key="task.id">
            <q-item-section>
              <q-item-label>{{ task.title }}</q-item-label>
              <q-item-label caption>
                {{ task.description || '— ไม่มีรายละเอียด —' }}
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn
                color="negative"
                flat
                icon="delete"
                @click="removeTask(task.id)"
              />
            </q-item-section>
          </q-item>
        </q-list>

        <div v-else class="text-grey q-mt-md">
          ยังไม่มีข้อมูล
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getTasks, createTask, deleteTask } from 'src/services/task.service'

const tasks = ref([])
const title = ref('')
const description = ref('')

const loadTasks = async () => {
  const res = await getTasks()
  tasks.value = res.data.data
}

const addTask = async () => {
  if (!title.value) return

  await createTask({
    title: title.value,
    description: description.value,
  })

  title.value = ''
  description.value = ''
  await loadTasks()
}

const removeTask = async (id) => {
  await deleteTask(id)
  await loadTasks()
}

onMounted(loadTasks)
</script>
