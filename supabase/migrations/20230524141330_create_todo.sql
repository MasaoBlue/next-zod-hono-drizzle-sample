CREATE TABLE
  public.todo (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid (),
    user_id UUID REFERENCES auth.users NOT NULL,
    task TEXT NOT NULL,
    is_complete BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone ('utc'::TEXT, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone ('utc'::TEXT, NOW()) NOT NULL
  );

CREATE FUNCTION update_test_automatic_updating_updated_at () RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_test_automatic_updating BEFORE
UPDATE ON todo FOR EACH ROW
EXECUTE FUNCTION update_test_automatic_updating_updated_at ();
