import { supabase } from "./supabase";

export async function getCourses() {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}