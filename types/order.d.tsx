type meal = {
  _id: string,
  index?: number,
  name: string,
  label?: string,
  quantity?: number,
  price: number,
  description?: string,
  status?: 'in progress' | 'done',
  add_on?: add_on[],
  tags?: string[]
};

type meal_group = {
  _id: string,
  index?: number,
  name: string,
  label: string,
  meals: meal[],
  price: number,
  available: boolean,
  description?: string
  add_on?: add_on[],
  tags?: string[]
};

type order = {
  _id: string,
  table: string,
  name: string,
  food: meal[],
  drink: meal[],
  status: 'in progress' | 'done',
  paid: boolean,
  created_at: Date,
  simple_date?: string
};

type table = {
  _id: string,
  name?: string,
  open: boolean,
  orders: order[]
};

type reduced_order = {
  key: string,
  table: string,
  name: string,
  created_at: Date,
  status: 'in progress' | 'done',
  meal: meal[]
};

type add_on = {
  key: string,
  name: string,
  add: boolean
};