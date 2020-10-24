<template>
    <div class="admin-pages">
        <PageTitle icon = "fa fa-cogs" main="Administração do Sistema"
            sub="Cadastros & Cia " />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Artigos" active>
                        <ArticleAdmin1/>
                    </b-tab>
                    <b-tab title="Categorias" active>
                        <CategoryAdmin1 />
                    </b-tab>
                    <b-tab title="Usuários" active>
                        <UserAdmin1 /> 
                    </b-tab>                                        
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>


<script>


import PageTitle from '../template/PageTitle'

import ArticleAdmin1 from './ArticleAdmin1'
import CategoryAdmin1 from './CategoryAdmin1'
import UserAdmin1 from './UserAdmin1'

export default {
    name: "AdminPages",
    components: { PageTitle , CategoryAdmin1, ArticleAdmin1, UserAdmin1 }
    
}
</script>

<style>

</style>