import { SiteShell } from '@/components/site'

type MenuItem = { name: string; description?: string; price: string; note?: string }

const breakfast: MenuItem[] = [
  { name: 'Eggs on toast', description: 'Freedom loaf / Bagel', price: '10' },
  { name: 'Toasted goodness muesli', description: 'Yoghurt mousse, seasonal fruit, crunched nuts', price: '13' },
  { name: 'Soft tofu salad basket', description: 'Seasonal greens, seaweed salad, cucumber, diced avocado, carrot, lotus chips, sesame seeds, chia, edamame with house made soy dressing', price: '15', note: 'VG · GF · DF' },
  { name: 'Salmon', description: 'Seasonal greens, seaweed salad, cucumber, diced avocado, flying fish roe, fresh raw salmon, sesame seeds, chióggia with gochujang sauce or house made soy dressing', price: '17' },
  { name: 'Smashed avo on sourdough', description: 'Chioggia beetroot, feta cheese, cherry tomatoes, chia seeds and poached egg', price: '15' },
  { name: 'Fitness bowl', description: 'Poached eggs, grilled halloumi, avocado, greens, beetroot, carrot, crunched nuts, pomegranate and tahini dressing', price: '17', note: 'VG · GF' },
  { name: 'Eggs benedict', description: 'Poached eggs, sautéed spinach, hollandaise served on potato rosti and sourdough', price: '18.5' },
  { name: 'Creamy balsamic mushrooms', description: 'Shiitake and wild mushrooms with fresh thyme, and garlic cloves in a creamy balsamic reduction on sourdough topped with pecorino', price: '18', note: 'VG' },
  { name: 'Okonomiyaki omelette', description: 'Shiitake mushroom, broccoli, grilled vine tomato, okonomiyaki sauce, Japanese mayo and katsuobushi', price: '18' },
  { name: 'Big Barry', description: 'Two eggs, streaky bacon, potato rosti, sautéed mushroom, roasted tomato, kransky, house made chilli beans served with sourdough', price: '22' },
]

const lunch: MenuItem[] = [
  { name: 'Beef burger', description: 'Cheese, green tomato chutney, caramelised beetroot, gherkins, aioli served on brioche bun with hand-cut fries', price: '18' },
  { name: 'Soft shell crab burger', description: 'Deep fried soft shell crab, fried egg, crispy seaweed, lime aioli served on brioche burger bun', price: '18' },
  { name: 'Karaage chicken burger', description: 'Karaage chicken, cheese, red onion, lettuce, tomato, spicy mayo served on brioche burger bun with hand-cut fries', price: '19' },
  { name: 'Thai chicken curry', description: 'Green curry on Basmati rice with salad greens', price: '17' },
  { name: 'Miso salmon', description: 'In house tea-smoked salmon, avocado, pickled vegetables, soft herbs, edamame, five grain rice balls, lotus root chips', price: '21', note: 'GF · DF' },
  { name: 'Bento', description: 'Agedashi tofu, edamame, lotus root chips, gyoza dumpling, spring roll, black sesame dressing salad, pickled vegetables served with five grain rice', price: '23/25' },
]

const rightColumn: MenuItem[] = [
  { name: 'Bulgogi deopbap', description: 'Korean soy marinated beef, poached egg, bean sprouts, capsicum, pickled vegetables, spring onion, sesame seeds, served on five grain rice', price: '16' },
  { name: 'Sashimi bibimbap', description: 'Fresh raw salmon, flying fish roe, diced avocado, sesame seeds, baby lettuce, seaweed salad, cucumber, crunched nuts, five grain rice, sesame oil served with gochujang sauce', price: '19', note: 'GF · DF' },
  { name: 'Chicken teriyaki', description: 'Tenderly grilled chicken thigh cooked with teriyaki sauce, fresh pickled zucchini, alfalfa, served on five grain rice', price: '18', note: 'GF · DF' },
  { name: 'Soba noodle', description: 'Japanese buckwheat noodle, cabbage, capsicum, celery, micro coriander, beetroot, spring onion, cashew nut and sesame seeds topped with agedashi tofu', price: '18', note: 'VG · GF · DF' },
  { name: 'Dumpling soup', description: 'House made pork and chive dumpling served in vegetable soup topped with red chilli, spring onion, micro coriander, crispy shallot', price: '16' },
  { name: 'Fried chicken ramen', description: 'Spiced fried chicken, roasted tomato, soft boiled egg, carrot, black mushroom, bean sprouts, spring onion, crispy shallot', price: '17' },
  { name: 'Miso ramen', description: 'Marinated braised pork, soft boiled egg, black mushroom, bean sprouts, carrot, spring onion, crispy shallot', price: '17' },
  { name: 'Tofu ramen', description: 'Deep-fried soft tofu, bok choy, soft boiled egg, roasted tomato, black mushroom, bean sprouts, beetroot, spring onion, crispy shallot', price: '16' },
]

function MenuColumn({ title, hours, items }: { title: string; hours?: string; items: MenuItem[] }) {
  return <section className="printed-menu-column"><div className="printed-menu-heading"><h2>{title}</h2>{hours && <span>{hours}</span>}</div>{items.map((item) => <article className="printed-menu-item" key={item.name}><div className="printed-menu-item-top"><h3>{item.name}</h3><strong>{item.price}</strong></div>{item.note && <span className="dietary">{item.note}</span>}{item.description && <p>{item.description}</p>}</article>)}</section>
}

export default function MenuPage() {
  return <SiteShell><section className="menu-page-intro"><p className="eyebrow">THE MENU</p><h1>Good food, made for lingering.</h1><p>Breakfast, lunch and a little something in between. Our menu is seasonal, generous and best enjoyed at your own pace.</p></section><div className="printed-menu"><MenuColumn title="Breakfast" hours="6:00 am – 2:30 pm" items={breakfast} /><div><MenuColumn title="Lunch" hours="10:30 am – 2:30 pm" items={lunch} /><section className="create-own"><div className="printed-menu-heading"><h2>Create your own</h2><span>6:00 am – 2:30 pm</span></div><p>House tea-smoked salmon / Cured salmon / Halloumi <strong>5</strong></p><p>Streaky bacon / Sausage / Feta <strong>4</strong></p><p>Avocado / Roasted tomato / Mushroom / Potato rosti / Vine tomato / Spinach <strong>4</strong></p><p>Poached / Scrambled / Fried <strong>3/5</strong></p><p>Sourdough / Freedom loaf / Wholegrain / Ciabatta / Bagel <strong>3/5</strong></p></section></div><div><MenuColumn title="" items={rightColumn} /><section className="sides"><div className="printed-menu-heading"><h2>Sides</h2></div>{[['Karaage chicken','9'],['Hand-cut fries / Vegetable croquette','6'],['Gyoza dumpling / Edamame / Lotus chips','5'],['Sautéed kimchi','4'],['Miso soup','2']].map(([name, price]) => <p key={name}>{name}<strong>{price}</strong></p>)}</section></div></div><p className="menu-legend">VG Vegetarian · GF Gluten Free · DF Dairy Free</p></SiteShell>
}
