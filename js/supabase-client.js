// Supabase 프로젝트 연결 정보
// anon public key는 클라이언트에 노출되어도 안전한 값입니다 (RLS로 접근 제어)
const SUPABASE_URL = "https://gqvqmearjqwwnpbxorrs.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxdnFtZWFyanF3d25wYnhvcnJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxNTkzMTYsImV4cCI6MjEwNTczNTMxNn0.Vz7lkJAg1frWVtktMkC2PWFnqcBS84ZBgxdWqBA53mw";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
