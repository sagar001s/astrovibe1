const userId = 'Uc368e14f-df63-4439-bfcb-5037097957d5'; // Replace with actual ID
const { data, error } = await supabase
  .from('users')
  .update({ subscription_tier: 'lifetime' })
  .eq('id', userId);