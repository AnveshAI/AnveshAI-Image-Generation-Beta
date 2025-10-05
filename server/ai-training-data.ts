
/**
 * AI Training Data for Image Generation
 * 
 * This file contains structured knowledge for training AI models to understand
 * image generation patterns, composition rules, and artistic techniques.
 */

export interface ImageGenerationKnowledge {
  category: string;
  subcategory: string;
  techniques: string[];
  qualityModifiers: string[];
  examples: string[];
}

export const imageGenerationTrainingData: ImageGenerationKnowledge[] = [
  {
    category: "Composition",
    subcategory: "Rule of Thirds",
    techniques: [
      "Place main subject at intersection points of grid lines",
      "Divide frame into 9 equal parts using 2 horizontal and 2 vertical lines",
      "Position horizon on top or bottom third line",
      "Create visual tension by offsetting subject from center"
    ],
    qualityModifiers: ["well-composed", "balanced composition", "professionally framed"],
    examples: [
      "landscape with horizon on lower third, tree on right intersection",
      "portrait with eyes on upper horizontal line",
      "street scene with vanishing point at intersection"
    ]
  },
  {
    category: "Lighting",
    subcategory: "Natural Light",
    techniques: [
      "Golden hour: warm, soft light during sunrise/sunset",
      "Blue hour: cool, diffused light before sunrise/after sunset",
      "Backlighting: light source behind subject creates silhouettes or rim lighting",
      "Side lighting: emphasizes texture and depth",
      "Diffused lighting: soft shadows from overcast conditions"
    ],
    qualityModifiers: ["natural lighting", "golden hour", "dramatic lighting", "soft shadows"],
    examples: [
      "portrait during golden hour with warm rim lighting",
      "landscape at blue hour with cool atmospheric perspective",
      "backlit subject with glowing edges and soft shadows"
    ]
  },
  {
    category: "Lighting",
    subcategory: "Studio Lighting",
    techniques: [
      "Three-point lighting: key light, fill light, and back light",
      "Rembrandt lighting: triangle of light on shadowed cheek",
      "Butterfly lighting: light directly above and in front of subject",
      "Split lighting: half of face in light, half in shadow",
      "High-key: bright, minimal shadows, cheerful mood",
      "Low-key: dark, dramatic shadows, moody atmosphere"
    ],
    qualityModifiers: ["studio lighting", "professionally lit", "dramatic shadows", "high-key", "low-key"],
    examples: [
      "portrait with Rembrandt lighting and triangle highlight",
      "product photography with three-point lighting setup",
      "high-key fashion shoot with minimal shadows"
    ]
  },
  {
    category: "Color Theory",
    subcategory: "Color Harmony",
    techniques: [
      "Complementary: colors opposite on color wheel (red-green, blue-orange)",
      "Analogous: adjacent colors on wheel create harmony",
      "Triadic: three colors equally spaced on wheel",
      "Monochromatic: variations of single hue",
      "Split-complementary: base color plus two adjacent to its complement"
    ],
    qualityModifiers: ["vibrant colors", "color grading", "cinematic colors", "harmonious palette"],
    examples: [
      "sunset with complementary orange and blue tones",
      "forest scene with analogous greens and yellows",
      "abstract art with triadic color scheme"
    ]
  },
  {
    category: "Perspective",
    subcategory: "Depth and Dimension",
    techniques: [
      "Linear perspective: parallel lines converge at vanishing point",
      "Atmospheric perspective: distant objects appear hazier and bluer",
      "Forced perspective: manipulate apparent size through positioning",
      "Worm's eye view: camera positioned low looking up",
      "Bird's eye view: camera positioned high looking down",
      "Dutch angle: tilted horizon for dynamic tension"
    ],
    qualityModifiers: ["deep depth of field", "bokeh background", "tilt-shift", "wide angle"],
    examples: [
      "city street with strong linear perspective toward vanishing point",
      "mountain landscape with atmospheric haze on distant peaks",
      "architectural shot from worm's eye view emphasizing height"
    ]
  },
  {
    category: "Artistic Styles",
    subcategory: "Realism",
    techniques: [
      "Photorealistic rendering with accurate lighting and textures",
      "Hyperrealism with enhanced detail beyond photography",
      "Precise shadows and reflections",
      "Accurate color reproduction",
      "Natural proportions and anatomy"
    ],
    qualityModifiers: ["photorealistic", "8k resolution", "ultra detailed", "hyperrealistic", "lifelike"],
    examples: [
      "photorealistic portrait with skin pores and hair detail visible",
      "hyperrealistic still life with water droplets and reflections",
      "architectural visualization with accurate materials and lighting"
    ]
  },
  {
    category: "Artistic Styles",
    subcategory: "Impressionism",
    techniques: [
      "Visible brushstrokes and texture",
      "Emphasis on light and its changing qualities",
      "Ordinary subject matter",
      "Unusual visual angles",
      "Separate rather than blended colors"
    ],
    qualityModifiers: ["impressionist style", "painterly", "loose brushwork", "vibrant"],
    examples: [
      "garden scene with dappled sunlight and loose brushstrokes",
      "water lilies with reflections in impressionist style",
      "street cafe with bright, separate color dabs"
    ]
  },
  {
    category: "Artistic Styles",
    subcategory: "Surrealism",
    techniques: [
      "Dreamlike scenarios and impossible situations",
      "Juxtaposition of unrelated objects",
      "Distorted scale and proportions",
      "Symbolic imagery",
      "Photorealistic rendering of impossible scenes"
    ],
    qualityModifiers: ["surreal", "dreamlike", "fantastical", "otherworldly"],
    examples: [
      "melting clocks in desert landscape",
      "fish swimming through clouds",
      "staircase leading to nowhere in impossible architecture"
    ]
  },
  {
    category: "Technical Quality",
    subcategory: "Resolution and Detail",
    techniques: [
      "High pixel density for sharp details",
      "Proper anti-aliasing to prevent jagged edges",
      "Texture detail at multiple scales",
      "Clean, noise-free rendering",
      "Proper focus and depth of field"
    ],
    qualityModifiers: [
      "8k resolution", "4k", "ultra HD", "sharp focus", "highly detailed",
      "intricate details", "masterpiece quality", "professional grade"
    ],
    examples: [
      "macro photography with visible texture details",
      "landscape with crisp details from foreground to background",
      "product shot with clean, sharp edges"
    ]
  },
  {
    category: "Mood and Atmosphere",
    subcategory: "Emotional Tone",
    techniques: [
      "Warm colors for comfort, energy, passion",
      "Cool colors for calm, sadness, professionalism",
      "High contrast for drama and tension",
      "Low contrast for subtlety and calm",
      "Fog/mist for mystery and atmosphere",
      "Rain for melancholy or romance"
    ],
    qualityModifiers: [
      "moody", "atmospheric", "ethereal", "dramatic", "peaceful",
      "energetic", "melancholic", "romantic", "mysterious"
    ],
    examples: [
      "foggy forest with mysterious atmosphere",
      "rainy city street with reflective surfaces and neon lights",
      "warm sunset creating peaceful, contemplative mood"
    ]
  },
  {
    category: "Subject Matter",
    subcategory: "Portraiture",
    techniques: [
      "Eye-level camera position for natural feel",
      "Slightly above for slimming effect",
      "Slightly below for powerful, dominant feel",
      "Focus on eyes as primary focal point",
      "Use of leading lines to draw attention to face",
      "Natural expressions and poses"
    ],
    qualityModifiers: [
      "portrait photography", "headshot", "environmental portrait",
      "candid", "studio portrait", "fashion photography"
    ],
    examples: [
      "close-up portrait with sharp focus on eyes",
      "environmental portrait showing subject in their workspace",
      "dramatic low-key portrait with side lighting"
    ]
  },
  {
    category: "Subject Matter",
    subcategory: "Landscape",
    techniques: [
      "Include foreground interest for depth",
      "Use leading lines to guide viewer's eye",
      "Wait for optimal lighting conditions",
      "Include sky for context and mood",
      "Use long exposure for smooth water/clouds",
      "Frame with natural elements"
    ],
    qualityModifiers: [
      "landscape photography", "wide angle", "panoramic", "scenic vista",
      "nature photography", "wilderness"
    ],
    examples: [
      "mountain landscape with lake reflection and dramatic clouds",
      "coastal scene with rocks in foreground and long exposure waves",
      "forest path leading into misty distance"
    ]
  },
  {
    category: "Post-Processing",
    subcategory: "Enhancement Techniques",
    techniques: [
      "Color grading for mood and style",
      "Selective sharpening of focal points",
      "Dodge and burn for depth",
      "Vignetting to draw focus inward",
      "Clarity adjustment for texture enhancement",
      "Split toning for creative color effects"
    ],
    qualityModifiers: [
      "color graded", "cinematic look", "film grain", "vintage",
      "HDR", "enhanced", "professionally edited"
    ],
    examples: [
      "portrait with warm tones and gentle vignette",
      "landscape with enhanced clarity in foreground details",
      "street photography with cinematic color grading"
    ]
  }
];

/**
 * Prompt Enhancement System
 * Analyzes user prompts and suggests improvements based on training data
 */
export function enhancePrompt(userPrompt: string): string {
  const enhancements: string[] = [];
  
  // Add quality modifiers if not present
  const hasQualityModifiers = imageGenerationTrainingData.some(data =>
    data.qualityModifiers.some(modifier => 
      userPrompt.toLowerCase().includes(modifier.toLowerCase())
    )
  );
  
  if (!hasQualityModifiers) {
    enhancements.push("highly detailed", "8k resolution", "professional quality");
  }
  
  // Add lighting if not specified
  if (!userPrompt.toLowerCase().match(/light|lighting|illuminat/)) {
    enhancements.push("natural lighting");
  }
  
  // Add composition guidance if simple prompt
  if (userPrompt.split(' ').length < 5) {
    enhancements.push("well-composed", "balanced composition");
  }
  
  // Combine original prompt with enhancements
  return enhancements.length > 0 
    ? `${userPrompt}, ${enhancements.join(', ')}`
    : userPrompt;
}

/**
 * Learning Examples for Common Scenarios
 */
export const commonScenarios = {
  portrait: {
    prompt: "portrait of a person",
    enhanced: "professional portrait of a person, natural lighting, sharp focus on eyes, shallow depth of field, 8k resolution, well-composed",
    reasoning: "Portraits benefit from specific lighting, focus points, and professional quality modifiers"
  },
  landscape: {
    prompt: "beautiful mountain landscape",
    enhanced: "beautiful mountain landscape, golden hour lighting, dramatic clouds, foreground interest with wildflowers, atmospheric perspective, highly detailed, 8k resolution",
    reasoning: "Landscapes need depth, good lighting, and atmospheric elements"
  },
  fantasy: {
    prompt: "dragon in sky",
    enhanced: "majestic dragon soaring through dramatic cloudy sky, epic scale, cinematic lighting, highly detailed scales and wings, fantasy art, 8k resolution, masterpiece quality",
    reasoning: "Fantasy scenes benefit from epic scale, detail emphasis, and artistic style specifications"
  },
  abstract: {
    prompt: "colorful abstract art",
    enhanced: "vibrant abstract art, complementary color scheme, dynamic composition, fluid forms, high contrast, modern art style, 8k resolution",
    reasoning: "Abstract art needs color theory, composition, and style specifications"
  },
  architecture: {
    prompt: "modern building",
    enhanced: "modern architectural masterpiece, clean lines, glass and steel materials, dramatic perspective, blue hour lighting, urban context, highly detailed, 8k resolution",
    reasoning: "Architecture requires material specification, perspective, and context"
  }
};

/**
 * Quality Checklist for Generated Images
 */
export const qualityChecklist = [
  "Resolution: Minimum 1024x1024, preferably 2048x2048 or higher",
  "Sharpness: Clear focus on intended subject",
  "Lighting: Appropriate for subject and mood",
  "Composition: Balanced and following basic rules",
  "Colors: Harmonious and appropriate for subject",
  "Detail: Sufficient texture and fine details",
  "Mood: Matches intended atmosphere",
  "Technical: No artifacts, noise, or distortions",
  "Creativity: Original and engaging",
  "Coherence: All elements work together logically"
];
