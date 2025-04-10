import { NextResponse } from 'next/server';
import { neon, neonConfig } from '@neondatabase/serverless';

// Configure neon
neonConfig.fetchConnectionCache = true;

// Create a SQL executor using the neon driver
const sql = neon(process.env.DATABASE_URL!);

// Ensure the table exists
async function ensureTableExists() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS properties (
        id SERIAL PRIMARY KEY,
        property_name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;
  } catch (error) {
    console.error('Error creating table:', error);
  }
}

// Initialize table on first request
let tableInitialized = false;

export async function POST(request: Request) {
  // Ensure the table exists
  if (!tableInitialized) {
    await ensureTableExists();
    tableInitialized = true;
  }
  
  try {
    const body = await request.json();
    const { propertyName } = body;
    
    if (!propertyName || typeof propertyName !== 'string') {
      return NextResponse.json(
        { error: 'Property name is required' },
        { status: 400 }
      );
    }
    
    // Insert property into database using neon driver
    const result = await sql`
      INSERT INTO properties (property_name) VALUES (${propertyName}) RETURNING *
    `;
    
    return NextResponse.json(
      { success: true, property: result[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving property:', error);
    return NextResponse.json(
      { error: 'Failed to save property' },
      { status: 500 }
    );
  }
} 