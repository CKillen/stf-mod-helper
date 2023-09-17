<template>
  <q-page class="col">
    <h1>Contact Name</h1>
    <q-input outlined label="Name" style="max-width: 300px;" />
    <div>
        <q-checkbox left-label v-model="left" label="Known"/>
    </div>
    <q-btn-dropdown label="Face">
        <q-list>
            <q-item>
                test
            </q-item>
        </q-list>
    </q-btn-dropdown>
    <q-btn-dropdown label="Contact Type">
        <q-list>
            <q-item>
                test
            </q-item>
        </q-list>
    </q-btn-dropdown>
    <q-input outlined label="Trigger Blocks" style="max-width: 300px;" />
    <div class="save-item">
        <q-input
            outlined
            label="Rep with Player"
            style="max-width: 300px;"
            v-model="RepWithPlayer"
        />
        <q-slider v-model="RepWithPlayer" :min="-100" :max="100" style="max-width: 300px;"/>
    </div>
    <div class="save-item">
        <q-input
            outlined
            label="Influence"
            style="max-width: 300px;"
            v-model="Influence"
        />
        <q-slider v-model="Influence" :min="0" :max="100" style="max-width: 300px;"/>
    </div>
    <div class="save-item">
        <q-input
            outlined
            label="Peak Influence"
            style="max-width: 300px;"
            v-model="PeakInfluence"
        />
        <q-slider v-model="PeakInfluence" :min="0" :max="100" style="max-width: 300px;"/>
    </div>
    <q-btn-dropdown label="Trait Group 1">
        <q-list>
            <q-item>
                test
            </q-item>
        </q-list>
    </q-btn-dropdown>
    <q-btn-dropdown label="Trait Group 2">
        <q-list>
            <q-item>
                test
            </q-item>
        </q-list>
    </q-btn-dropdown>
    <q-btn-dropdown label="Trait Group 3">
        <q-list>
            <q-item>
                test
            </q-item>
        </q-list>
    </q-btn-dropdown>
    <q-btn-dropdown label="Trait Group 4">
        <q-list>
            <q-item>
                test
            </q-item>
        </q-list>
    </q-btn-dropdown>
    <div class="save-item">
        <span> Linked Contact #1: </span>
        <q-btn-dropdown label="Contact Type">
            <q-list>
                <q-item>
                    test
                </q-item>
            </q-list>
        </q-btn-dropdown>
    </div>
    <div class="save-item">
        <!-- Put in with linked section? -->
        <span>Weight Contact 1</span>
        <q-slider />
    </div>
    <div class="save-item">
        <span> Linked Contact #2: </span>
        <q-btn-dropdown label="Contact Type">
            <q-list>
                <q-item>
                    test
                </q-item>
            </q-list>
        </q-btn-dropdown>
    </div>
    <div class="save-item">
        <!-- Put in with linked section? -->
        <span>Weight Contact 2</span>
        <q-slider />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      RepWithPlayer: ref(0),
      Influence: ref(0),
      PeakInfluence: ref(0),
    };
  },
/*

  Contact
  option1 = const 20
  option2 = autoid
  option3 = contacttype id
  option4 = known at game start
  option5 = faceid
  option6 = trigger block
  name = name

  Rep&Infl
  option1 = const 21
  option2 = Personal Rep
  option3 = Influence
  option4 = Max Influence

  Traits
  option1 = const 22
  option2 = trait id (group 1)
  option3 = trait id (group 2)
  option4 = trait id (group 3)
  option5 = trait id (group 4)

    Links
    option1 = const 23
    option2 = link 1 Contact Story id
    option3 = link 1 weight
    option2 = link 2 Contact Story id
    option5 = link 2 weight

*/
});
</script>
