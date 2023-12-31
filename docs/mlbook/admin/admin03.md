# 权限管理
### 权限角色
---------------
&emsp;&emsp;权限角色是指对应用程序中不同用户或用户组的权限控制。通过权限角色，可以定义不同用户或用户组对应用程序的访问权限和操作权限。

&emsp;&emsp;首先，低代码平台提供角色管理功能，可以创建和管理不同的角色，每个角色可以分配不同的权限。角色可以与应用程序中的不同模块和功能相关联，例如管理员角色、普通用户角色等。

&emsp;&emsp;其次，低代码平台提供权限管理功能，可以定义不同角色对应用程序的访问权限和操作权限。权限可以包括对不同模块的访问权限、对不同数据的操作权限等。通过权限管理功能，可以精细控制不同用户或用户组对应用程序的访问和操作，确保数据的安全性和系统的稳定性。

&emsp;&emsp;此外，低代码平台还支持动态权限管理，可以根据用户的身份和角色动态生成相应的权限。例如，当用户登录时，系统可以根据用户的角色和权限配置，自动生成对该用户可见的菜单和操作按钮。这样可以提高系统的灵活性和可维护性，同时也方便开发者进行权限管理和控制。

&emsp;&emsp;总之，权限角色功能可以帮助企业实现更精细的用户权限控制，确保系统的安全性和稳定性。通过角色管理和权限管理功能，企业可以根据实际需求定义不同用户或用户组的权限，实现更高效、更灵活的应用程序开发和管理。

权限模型基于以下 3 个关键对象：  
&emsp;&emsp;用户  
&emsp;&emsp;部门  
&emsp;&emsp;角色  

&emsp;&emsp;其中，角色是权限的集合，定义了一组特定的权限。部门则用于定义权限的层次结构，例如，允许用户读取或查看其所在部门的特定数据，或允许用户修改其个人数据等。在系统中，用户会被赋予特定的角色和部门，从而获得相应的权限和操作权限。

您可以根据需要添加不同的角色并为其配置权限，然后将角色应用到不同的用户。

![权限角色](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E7%BB%84%E7%BB%87%E6%9E%B6%E6%9E%84/%E6%9D%83%E9%99%90%E8%A7%92%E8%89%B2.png)

**1.添加权限角色**  
进入系统管理 - 组织机构 - 权限角色，点击 [新建角色] ，然后填写角色名称、是否禁用、角色说明、数据权限设置、功能权限设置。

![新建权限角色](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86/%E6%B7%BB%E5%8A%A0%E6%9D%83%E9%99%90%E8%A7%92%E8%89%B2%EF%BC%88%E6%9D%83%E9%99%90%EF%BC%89.png)

* 数据权限设置

可对业务记录进行以下4种操作：  
1.查看：查看记录  
2.新建：添加记录  
3.修改：修改记录  
4.删除：删除记录

定义了5个权限层级：  
1.无权限：无权限  
2.本人：所属用户是自己（即当前登录用户自己）  
3.本部门：所属部门是自己的所在部门  
4.本部门及以下：本部门以及本部门以下的所有子级部门  
5.上级部门及以下：上级部门以及上级部门以下的所有子级部门  
6.全部：全部

![数据权限设置](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86/%E6%95%B0%E6%8D%AE%E6%9D%83%E9%99%90%E8%AE%BE%E7%BD%AE%EF%BC%88%E6%9D%83%E9%99%90%EF%BC%89.png)

* 功能权限设置

功能权限是指低代码平台在原有功能基础上，通过扩展其他功能或模块，增加新的权限控制方式，以实现对应用程序更精细的控制。通过功能权限，可以更精细地控制用户对应用程序的访问和操作，确保数据的安全性和系统的稳定性。

![功能权限设置](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86/%E5%8A%9F%E8%83%BD%E6%9D%83%E9%99%90%E8%AE%BE%E7%BD%AE%EF%BC%88%E6%9D%83%E9%99%90%EF%BC%89.png)

**2.修改/删除权限角色**  

&emsp;&emsp;通过修改/删除权限角色，可以实现对已创建角色的修改或删除操作。例如，可以修改角色的名称、描述、权限等属性，或者删除不再需要的角色。这些操作可以帮助管理员更好地管理用户和用户组的权限，确保系统的安全性和稳定性。

![修改/删除权限角色按钮](https://mldocs.ks3-cn-beijing.ksyuncs.com/%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86/%E4%BF%AE%E6%94%B9%E5%88%A0%E9%99%A4%E6%9D%83%E9%99%90%E8%A7%92%E8%89%B2%EF%BC%88%E6%9D%83%E9%99%90%EF%BC%89.png)

&emsp;&emsp;1.点击【编辑】可修改对应的角色的角色名称、是否禁用、角色说明、实体权限设置、功能权限设置。

&emsp;&emsp;2.点击【删除】可将对应的角色进行删除。