<template>
  <div class="search-form my-5">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <!-- Formulario -->
        <b-form @submit.prevent="onSubmit">
          <!-- Grupo 1 (input texto) -->
          <b-form-group
            id="input-group-1"
            label="BattleTag:"
            label-for="input-text"
            description="Format: YourProfile#1234"
          >
            <b-form-input
              id="input-text"
              v-model="form.battleTag"
              type="text"
              size="lg"
              required
              placeholder="BattleTag"
            >
            </b-form-input>
          </b-form-group>

          <!-- Grupo 2 (selector de region) -->
          <b-form-group
            id="input-group-2"
            label="Region:"
            label-for="input-region"
          >
            <b-form-select
              id="input-region"
              v-model="form.region"
              size="lg"
              :options="regions"
              required
            >
            </b-form-select>
          </b-form-group>

          <!-- boton de envio -->
          <div class="d-flex justify-content-end mt-5">
            <b-button type="submit" variant="primary" size="lg">
              submit
            </b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { regions } from '@/utils/regions'

export default {
  name: 'HomeForm',
  data() {
    return {
      form: {
        battleTag: '',
        region: 'eu'
      }
    }
  },

  computed: {
    regions() {
      return regions.map(el => ({ value: el, text: el.toUpperCase() }))
    }
  },

  methods: {
    onSubmit() {
      const { region, battleTag } = this.form
      this.$router.push({
        name: 'Profile',
        params: {
          region,
          battleTag: battleTag.replace('#', '-')
        }
      })
    }
  }
}
</script>
