<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>連絡先編集</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="address.name" label="名前"> </v-text-field>
              <v-text-field
                v-model="address.tel"
                label="電話番号"
              ></v-text-field>
              <v-text-field
                v-model="address.email"
                label="メールアドレス"
              ></v-text-field>
              <v-text-field
                v-model="address.address"
                label="住所"
              ></v-text-field>
              <div class="text-center">
                <!-- 以下実装だと問題なくページ遷移できる-->
                <v-btn @click="$router.push({ name: 'addresses' })"
                  >キャンセル</v-btn
                >
                <!-- 以下実装だと何故かページ遷移できない-->
                <!-- <router-link :to="{ name: 'address_edit' }">
                  <v-btn color="info">
                    キャンセル2
                  </v-btn>
                </router-link> -->

                <v-btn color="info" class="ml-2" @click="submit">保存</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    if (!this.$route.params.address_id) return;
    const address = this.$store.getters.getAddressById(
      this.$route.params.address_id
    );
    if (address) {
      this.address = address;
    } else {
      this.$router.push({ name: "addresses" });
    }
  },
  data() {
    return {
      address: {},
    };
  },
  methods: {
    submit() {
      if (this.$route.params.address_id) {
        this.updateAddress({
          id: this.$route.params.address_id,
          address: this.address,
        });
      } else {
        this.addAddress(this.address);
      }
      this.$router.push({ name: "addresses" });
      this.address = {};
    },
    ...mapActions(["addAddress", "updateAddress"]),
  },
};
</script>
