import * as tpg from 'type-graphql'

@tpg.ObjectType()
class Recipe {
  @tpg.Field(type => tpg.ID)
  id: string;

  @tpg.Field()
  title: string;

  @tpg.Field({ nullable: true })
  description?: string;

  @tpg.Field()
  creationDate: Date;

  @tpg.Field(type => [String])
  ingredients: string[];
}

@tpg.InputType()
class NewRecipeInput {
  @tpg.Field()
  @tpg.MaxLength(30)
  title: string;

  @tpg.Field({ nullable: true })
  @tpg.Length(30, 255)
  description?: string;

  @tpg.Field(type => [String])
  @tpg.ArrayMaxSize(30)
  ingredients: string[];
}

@tpg.ArgsType()
class RecipesArgs {
  @tpg.Field(type => tpg.Int)
  @tpg.Min(0)
  skip: number = 0;

  @tpg.Field(type => tpg.Int)
  @tpg.Min(1)
  @tpg.Max(50)
  take: number = 25;
}

@tpg.Resolver(Recipe)
class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @tpg.Query(returns => Recipe)
  async recipe(@tpg.Arg("id") id: string) {
    const recipe = await this.recipeService.findById(id);
    if (recipe === undefined) {
      throw new RecipeNotFoundError(id);
    }
    return recipe;
  }

  @tpg.Query(returns => [Recipe])
  recipes(@tpg.Args() { skip, take }: RecipesArgs) {
    return this.recipeService.findAll({ skip, take });
  }

  @tpg.Mutation(returns => Recipe)
  @tpg.Authorized()
  addRecipe(
    @tpg.Arg("newRecipeData") newRecipeData: NewRecipeInput,
    @tpg.Ctx("user") user: User,
  ): Promise<Recipe> {
    return this.recipeService.addNew({ data: newRecipeData, user });
  }

  @tpg.Mutation(returns => Boolean)
  @tpg.Authorized(Roles.Admin)
  async removeRecipe(@tpg.Arg("id") id: string) {
    try {
      await this.recipeService.removeById(id);
      return true;
    } catch {
      return false;
    }
  }
}

export default RecipeResolver