<script>

// This won't always be contacts it can be passed any list of obejcts with the following
// properties: id, name, complete
const items = [
  { id: 1, name: 'Jefferson', complete: true },
  { id: 2, name: 'John', complete: true },
  { id: 3, name: 'Paul', complete: false },
  { id: 4, name: 'George', complete: true },
  { id: 5, name: 'Ringo', complete: true },
];

export default {
  setup() {
    // Nothing
  },
  data() {
    return {
      items,
    };
  },
  computed: {
    sortedItems() {
      return items.sort((a, b) => a.complete - b.complete);
    },
    // Nothing
  },
};
</script>

<template>
    <q-list bordered separator>
      <q-item v-for="item in sortedItems" :key="item.id" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section v-if="item.complete">{{item.name}}</q-item-section>
        <q-item-section v-else>
            <span>
                {{item.name}}
                <q-icon name="warning" color="warning" size="2rem" />
            </span>
        </q-item-section>
      </q-item>
    </q-list>
</template>
