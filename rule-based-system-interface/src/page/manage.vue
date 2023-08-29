<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #545c64;">
				<el-menu
					default-active="2"
					class="el-menu-vertical-demo"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b">
					<el-menu-item index="manage">
						<i class="el-icon-menu"></i>
						<span slot="title">HomePage</span>
					</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>System Management</template>
						<el-menu-item index="ruleTechs">Rule Learning Techniques</el-menu-item>
						<el-menu-item index="ruleSelection">Rule Selection</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-edit"></i>Prediction</template>
						<el-menu-item index="noMissing">with no Missing Values</el-menu-item>
						<el-menu-item index="withMissing">with Missing Values</el-menu-item>
					</el-submenu>
				</el-menu>

				<!-- <el-menu :default-active="1" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage"
					background-color="#545c64"
      				text-color="#fff"
      				active-text-color="#ffd04b"
	  				><i class="el-icon-menu"></i>HomePage</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>Rule Set Manage</template>
						<el-menu-item index="ruleTechs">Rule Learning Techniques</el-menu-item>
						<el-menu-item index="ruleSelection">Rule Selection</el-menu-item>
					</el-submenu>
				</el-menu> -->
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{
		
	}
</style>
