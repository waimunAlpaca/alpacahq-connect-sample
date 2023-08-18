module.exports = {
    token: async (obj) => {
      return await supabase.callback(obj);
    },
  
  };
  