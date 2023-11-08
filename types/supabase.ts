export interface Database {
  public: {
    Tables: {
      ceremonies: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      images: {
        Row: {
          ceremony: string | null
          directory: string | null
          id: string
          order: number | null
          region: string | null
          sources: string | null
          subregion: string | null
          theme: string | null
          updated_at: string | null
          venue: string | null
        }
        Insert: {
          ceremony?: string | null
          directory?: string | null
          id?: string
          order?: number | null
          region?: string | null
          sources?: string | null
          subregion?: string | null
          theme?: string | null
          updated_at?: string | null
          venue?: string | null
        }
        Update: {
          ceremony?: string | null
          directory?: string | null
          id?: string
          order?: number | null
          region?: string | null
          sources?: string | null
          subregion?: string | null
          theme?: string | null
          updated_at?: string | null
          venue?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "images_ceremony_fkey"
            columns: ["ceremony"]
            referencedRelation: "ceremonies"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "images_region_fkey"
            columns: ["region"]
            referencedRelation: "regions"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "images_subregion_fkey"
            columns: ["subregion"]
            referencedRelation: "subregions"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "images_theme_fkey"
            columns: ["theme"]
            referencedRelation: "themes"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "images_venue_fkey"
            columns: ["venue"]
            referencedRelation: "venues"
            referencedColumns: ["name"]
          }
        ]
      }
      regions: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id: number
          name?: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      subregions: {
        Row: {
          id: number
          name: string
          region: string | null
        }
        Insert: {
          id?: number
          name: string
          region?: string | null
        }
        Update: {
          id?: number
          name?: string
          region?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subregions_region_fkey"
            columns: ["region"]
            referencedRelation: "regions"
            referencedColumns: ["name"]
          }
        ]
      }
      themes: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      venues: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
